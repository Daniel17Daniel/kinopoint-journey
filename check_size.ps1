Add-Type -AssemblyName System.Drawing
function Get-Size($ImagePath) {
    $bmp = [System.Drawing.Bitmap]::FromFile($ImagePath)
    Write-Output "$ImagePath: $($bmp.Width)x$($bmp.Height)"
    $bmp.Dispose()
}
Get-Size "C:\Users\Asus\.gemini\antigravity\brain\e876282b-b02a-4134-83eb-005e94076398\media__1779550951843.jpg"
Get-Size "C:\Users\Asus\.gemini\antigravity\brain\e876282b-b02a-4134-83eb-005e94076398\media__1779550951894.jpg"
Get-Size "C:\Users\Asus\.gemini\antigravity\brain\e876282b-b02a-4134-83eb-005e94076398\media__1779550951904.jpg"
