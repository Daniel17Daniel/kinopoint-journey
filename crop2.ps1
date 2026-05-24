Add-Type -AssemblyName System.Drawing

Function Crop-WhiteBorders {
    param([string]$ImagePath)
    
    $bmp = [System.Drawing.Bitmap]::FromFile($ImagePath)
    
    $top = 0
    $bottom = $bmp.Height - 1
    $left = 0
    $right = $bmp.Width - 1
    
    $tolerance = 220
    
    # Find Top
    for ($y = 0; $y -lt $bmp.Height; $y++) {
        $isWhiteRow = $true
        for ($x = 0; $x -lt $bmp.Width; $x+=10) {
            $color = $bmp.GetPixel($x, $y)
            if ($color.R -lt $tolerance -or $color.G -lt $tolerance -or $color.B -lt $tolerance) {
                $isWhiteRow = $false; break
            }
        }
        if (-not $isWhiteRow) { $top = $y; break }
    }
    
    # Find Bottom
    for ($y = $bmp.Height - 1; $y -gt $top; $y--) {
        $isWhiteRow = $true
        for ($x = 0; $x -lt $bmp.Width; $x+=10) {
            $color = $bmp.GetPixel($x, $y)
            if ($color.R -lt $tolerance -or $color.G -lt $tolerance -or $color.B -lt $tolerance) {
                $isWhiteRow = $false; break
            }
        }
        if (-not $isWhiteRow) { $bottom = $y; break }
    }
    
    # Find Left
    for ($x = 0; $x -lt $bmp.Width; $x++) {
        $isWhiteCol = $true
        for ($y = $top; $y -le $bottom; $y+=10) {
            $color = $bmp.GetPixel($x, $y)
            if ($color.R -lt $tolerance -or $color.G -lt $tolerance -or $color.B -lt $tolerance) {
                $isWhiteCol = $false; break
            }
        }
        if (-not $isWhiteCol) { $left = $x; break }
    }
    
    # Find Right
    for ($x = $bmp.Width - 1; $x -gt $left; $x--) {
        $isWhiteCol = $true
        for ($y = $top; $y -le $bottom; $y+=10) {
            $color = $bmp.GetPixel($x, $y)
            if ($color.R -lt $tolerance -or $color.G -lt $tolerance -or $color.B -lt $tolerance) {
                $isWhiteCol = $false; break
            }
        }
        if (-not $isWhiteCol) { $right = $x; break }
    }
    
    $width = $right - $left + 1
    $height = $bottom - $top + 1
    
    if ($width -ne $bmp.Width -or $height -ne $bmp.Height) {
        Write-Output "Cropping $ImagePath... Original: $($bmp.Width)x$($bmp.Height), New: $($width)x$($height)"
        $rect = New-Object System.Drawing.Rectangle($left, $top, $width, $height)
        $croppedBmp = $bmp.Clone($rect, $bmp.PixelFormat)
        $bmp.Dispose()
        $croppedBmp.Save($ImagePath.Replace(".jpg", "_cropped.jpg"), [System.Drawing.Imaging.ImageFormat]::Jpeg)
        $croppedBmp.Dispose()
        Remove-Item $ImagePath
        Rename-Item $ImagePath.Replace(".jpg", "_cropped.jpg") (Split-Path $ImagePath -Leaf)
    } else {
        Write-Output "No white borders found in $ImagePath"
        $bmp.Dispose()
    }
}

Crop-WhiteBorders "c:\Users\Asus\Desktop\kinopoint-journey-main\src\assets\value-practice.jpg"
Crop-WhiteBorders "c:\Users\Asus\Desktop\kinopoint-journey-main\src\assets\value-presence.jpg"
Crop-WhiteBorders "c:\Users\Asus\Desktop\kinopoint-journey-main\src\assets\value-growth.jpg"
