# Create fonts directory if it doesn't exist
New-Item -ItemType Directory -Force -Path "public/fonts"

# Download Inter fonts
$webClient = New-Object System.Net.WebClient

# Download Inter Regular
$webClient.DownloadFile(
    "https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2",
    "public/fonts/Inter-Regular.ttf"
)

# Download Inter Bold
$webClient.DownloadFile(
    "https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYAZ9hiA.woff2",
    "public/fonts/Inter-Bold.ttf"
)
