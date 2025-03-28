@echo off
set "targetDir=E:\local-website\TataMata\AdaptivePracticeTracker\backend"
set "outputFile=%~dp0directory-list.txt"

echo Listing all files under:
echo %targetDir%
echo (excluding node_modules folders)
echo Please wait...

> "%outputFile%" echo === File List (excluding node_modules) ===
>> "%outputFile%" echo.

for /f "delims=" %%A in ('dir "%targetDir%" /s /b /a-d ^| findstr /i /v "\\node_modules\\"') do (
    >> "%outputFile%" echo %%A
)

echo.
echo Done! Results saved to: %outputFile%
echo You can open it, copy everything, and share it here.
pause
