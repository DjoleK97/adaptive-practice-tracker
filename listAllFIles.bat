@echo off
set "targetDir=E:\local-website\TataMata\AdaptivePracticeTracker\frontend"
set "outputFile=%~dp0directory-list.txt"

echo Listing all files and folders under:
echo %targetDir%
echo Please wait...

(
    echo === Folder and File Structure ===
    echo.
    dir "%targetDir%" /s /b
) > "%outputFile%"

echo.
echo Done! Results saved to: %outputFile%
echo You can open it, copy everything, and share it here.
pause
