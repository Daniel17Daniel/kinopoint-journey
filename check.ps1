Add-Type -AssemblyName System.Drawing
function Get-CornerColors($ImagePath) {
    $bmp = [System.Drawing.Bitmap]::FromFile($ImagePath)
    Write-Output "File: $ImagePath"
    Write-Output "Size: $($bmp.Width)x$($bmp.Height)"
    $tl = $bmp.GetPixel(0, 0)
    $tr = $bmp.GetPixel($bmp.Width - 1, 0)
    $bl = $bmp.GetPixel(0, $bmp.Height - 1)
    $br = $bmp.GetPixel($bmp.Width - 1, $bmp.Height - 1)
    $midTop = $bmp.GetPixel($bmp.Width / 2, 5)
    $midLeft = $bmp.GetPixel(5, $bmp.Height / 2)
    Write-Output "TL: $($tl.R),$($tl.G),$($tl.B) | TR: $($tr.R),$($tr.G),$($tr.B)"
    Write-Output "BL: $($bl.R),$($bl.G),$($bl.B) | BR: $($br.R),$($br.G),$($br.B)"
    Write-Output "MidTop: $($midTop.R),$($midTop.G),$($midTop.B) | MidLeft: $($midLeft.R),$($midLeft.G),$($midLeft.B)"
    $bmp.Dispose()
}
Get-CornerColors "c:\Users\Asus\Desktop\kinopoint-journey-main\src\assets\value-practice.jpg"
Get-CornerColors "c:\Users\Asus\Desktop\kinopoint-journey-main\src\assets\value-presence.jpg"
Get-CornerColors "c:\Users\Asus\Desktop\kinopoint-journey-main\src\assets\value-growth.jpg"
