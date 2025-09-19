# SignalForge Development Commands

## Primary Development Commands
- `npm run dev` - Start development server on port 3000
- `npm run build` - Build for production (TypeScript compile + Vite build)
- `npm run preview` - Preview production build locally
- `npm run typecheck` - Run TypeScript type checking without emitting files

## Testing Commands
- `npm run test` - Run all tests in watch mode (Vitest)
- `npm run test:unit` - Run unit tests once (Vitest)
- `npm run test:e2e` - Run end-to-end tests (Playwright)

## Code Quality Commands
- `npm run lint` - Run ESLint (currently only JS files, needs TS fix)
- `npm run typecheck` - TypeScript type checking

## Task Completion Workflow
After completing any task:
1. Run `npm run typecheck` to ensure no TypeScript errors
2. Run `npm run lint` to check code style
3. Run `npm run test:unit` to ensure unit tests pass
4. Run `npm run build` to verify production build works

## Windows-Specific Commands
- `dir` - List directory contents
- `cd` - Change directory
- `type` - Display file contents (equivalent to `cat`)
- `findstr` - Search text in files (equivalent to `grep`)
- `where` - Find executable location (equivalent to `which`)

## Git Commands
- `git status` - Check working directory status
- `git add .` - Stage all changes
- `git commit -m "message"` - Commit changes
- `git push` - Push to remote repository