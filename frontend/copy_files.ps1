$src = "c:\Users\HP\Desktop\my file\real-pro\hamdan-united\client"
$dest = "c:\Users\HP\Desktop\my file\real-pro\adamtech"

Copy-Item "$src\index.html" "$dest\index.html" -Force
Copy-Item "$src\src\App.jsx" "$dest\src\App.jsx" -Force
Copy-Item "$src\src\index.css" "$dest\src\index.css" -Force

New-Item -ItemType Directory -Force -Path "$dest\src\pages"
Copy-Item "$src\src\pages\Home.jsx" "$dest\src\pages\Home.jsx" -Force

New-Item -ItemType Directory -Force -Path "$dest\src\components"
$components = @("TopNavBar", "HeroSection", "FeatureStats", "AboutSection", "ServicesSection", "CollectionSection", "WhyChooseUs", "Footer")
foreach ($comp in $components) {
    Copy-Item "$src\src\components\$comp" "$dest\src\components\$comp" -Recurse -Force
}
