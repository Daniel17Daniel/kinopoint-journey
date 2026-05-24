Add-Type -AssemblyName System.Drawing
function Analyze-Image($ImagePath) {
    $bmp = [System.Drawing.Bitmap]::FromFile($ImagePath)
    Write-Output "--- $ImagePath ---"
    
    $w = $bmp.Width
    $h = $bmp.Height
    
    # Check middle column from top to bottom
    Write-Output "Middle column (Top down):"
    for ($y = 0; $y -lt 100; $y+=10) {
        $c = $bmp.GetPixel($w/2, $y)
        Write-Output "y=$y : $($c.R),$($c.G),$($c.B)"
    }
    
    # Check middle row from left to right
    Write-Output "Middle row (Left to right):"
    for ($x = 0; $x -lt 100; $x+=10) {
        $c = $bmp.GetPixel($x, $h/2)
        Write-Output "x=$x : $($c.R),$($c.G),$($c.B)"
    }
    
    $bmp.Dispose()
}

Analyze-Image "C:\Users\Asus\.gemini\antigravity\brain\e876282b-b02a-4134-83eb-005e94076398\media__1779550951843.jpg"
Analyze-Image "C:\Users\Asus\.gemini\antigravity\brain\e876282b-b02a-4134-83eb-005e94076398\media__1779550951894.jpg"
Analyze-Image "C:\Users\Asus\.gemini\antigravity\brain\e876282b-b02a-4134-83eb-005e94076398\media__1779550951904.jpg"
