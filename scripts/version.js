#!/usr/bin/env node

const fs = require('fs');
const { execSync } = require('child_process');

/**
 * Semantic versioning script for SignalForge
 * Usage: node scripts/version.js [major|minor|patch|prerelease] [--dry-run]
 */

const VERSION_TYPES = ['major', 'minor', 'patch', 'prerelease'];

function getCurrentVersion() {
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    return packageJson.version;
}

function bumpVersion(currentVersion, type) {
    const [major, minor, patch] = currentVersion.split('.').map(v => {
        // Handle prerelease versions like 1.0.0-beta.1
        return parseInt(v.split('-')[0]);
    });

    let newVersion;
    switch(type) {
        case 'major':
            newVersion = `${major + 1}.0.0`;
            break;
        case 'minor':
            newVersion = `${major}.${minor + 1}.0`;
            break;
        case 'patch':
            newVersion = `${major}.${minor}.${patch + 1}`;
            break;
        case 'prerelease':
            if (currentVersion.includes('-')) {
                // Increment prerelease number
                const [base, prerelease] = currentVersion.split('-');
                const [type, num] = prerelease.split('.');
                newVersion = `${base}-${type}.${parseInt(num) + 1}`;
            } else {
                // Create first prerelease
                newVersion = `${major}.${minor}.${patch + 1}-beta.0`;
            }
            break;
        default:
            throw new Error(`Invalid version type: ${type}`);
    }

    return newVersion;
}

function updatePackageJson(newVersion) {
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    packageJson.version = newVersion;
    fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2) + '\n');
}

function generateChangelog(newVersion) {
    const changelogPath = 'CHANGELOG.md';
    let changelog = '';

    if (fs.existsSync(changelogPath)) {
        changelog = fs.readFileSync(changelogPath, 'utf8');
    } else {
        changelog = '# Changelog\n\nAll notable changes to SignalForge will be documented in this file.\n\n';
    }

    const date = new Date().toISOString().split('T')[0];
    const gitLog = execSync('git log --oneline --since="1 week ago"', { encoding: 'utf8' });

    const newEntry = `## [${newVersion}] - ${date}\n\n### Recent Changes\n${gitLog}\n`;

    // Insert after the header
    const lines = changelog.split('\n');
    const insertIndex = lines.findIndex(line => line.startsWith('## ')) || 3;
    lines.splice(insertIndex, 0, newEntry);

    fs.writeFileSync(changelogPath, lines.join('\n'));
}

function runCommand(command, description) {
    console.log(`🔄 ${description}...`);
    try {
        execSync(command, { stdio: 'inherit' });
        console.log(`✅ ${description} completed`);
    } catch (error) {
        console.error(`❌ ${description} failed:`, error.message);
        process.exit(1);
    }
}

function validateRepository() {
    // Check if we're in a git repository
    try {
        execSync('git rev-parse --git-dir', { stdio: 'ignore' });
    } catch (error) {
        console.error('❌ Not a git repository');
        process.exit(1);
    }

    // Check if working directory is clean
    try {
        const status = execSync('git status --porcelain', { encoding: 'utf8' });
        if (status.trim()) {
            console.error('❌ Working directory is not clean. Commit or stash changes first.');
            process.exit(1);
        }
    } catch (error) {
        console.error('❌ Cannot check git status');
        process.exit(1);
    }

    // Check if we're on main or develop branch
    try {
        const branch = execSync('git branch --show-current', { encoding: 'utf8' }).trim();
        if (!['main', 'develop'].includes(branch)) {
            console.warn(`⚠️  Warning: You're on branch '${branch}'. Consider releasing from main or develop.`);
        }
    } catch (error) {
        console.warn('⚠️  Could not determine current branch');
    }
}

function main() {
    const args = process.argv.slice(2);
    const versionType = args[0];
    const isDryRun = args.includes('--dry-run');

    if (!versionType || !VERSION_TYPES.includes(versionType)) {
        console.error('Usage: node scripts/version.js [major|minor|patch|prerelease] [--dry-run]');
        console.error('\nExamples:');
        console.error('  node scripts/version.js patch        # 1.0.0 -> 1.0.1');
        console.error('  node scripts/version.js minor        # 1.0.1 -> 1.1.0');
        console.error('  node scripts/version.js major        # 1.1.0 -> 2.0.0');
        console.error('  node scripts/version.js prerelease   # 1.1.0 -> 1.1.1-beta.0');
        process.exit(1);
    }

    console.log('🎵 SignalForge Version Management\n');

    // Validate repository state
    if (!isDryRun) {
        validateRepository();
    }

    const currentVersion = getCurrentVersion();
    const newVersion = bumpVersion(currentVersion, versionType);

    console.log(`📦 Current version: ${currentVersion}`);
    console.log(`🚀 New version: ${newVersion}`);
    console.log(`📝 Version type: ${versionType}`);

    if (isDryRun) {
        console.log('\n🔍 DRY RUN - No changes will be made');
        return;
    }

    console.log('\nProceeding with version bump...\n');

    // Run tests before version bump
    runCommand('npm run test', 'Running tests');
    runCommand('npm run build', 'Building application');

    // Update version
    updatePackageJson(newVersion);
    console.log('📦 Updated package.json');

    // Generate/update changelog
    generateChangelog(newVersion);
    console.log('📝 Updated CHANGELOG.md');

    // Git operations
    runCommand('git add package.json CHANGELOG.md', 'Staging changes');
    runCommand(`git commit -m "chore: bump version to ${newVersion}"`, 'Creating commit');
    runCommand(`git tag -a v${newVersion} -m "Release ${newVersion}"`, 'Creating tag');

    console.log('\n🎉 Version bump completed successfully!');
    console.log('\nNext steps:');
    console.log(`  git push origin main`);
    console.log(`  git push origin v${newVersion}`);

    if (versionType === 'prerelease') {
        console.log('\n⚠️  This is a prerelease. Consider testing thoroughly before stable release.');
    }
}

if (require.main === module) {
    main();
}