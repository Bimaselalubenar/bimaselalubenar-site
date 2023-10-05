module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "Primary": {
          "100": "#003EB3",
          "300": "#0074F0",
          "500": "#14A9FF",
          "700": "#85DCFF"
        },
        "Danger": {
          "300": "#A22020",
          "500": "#BF2626",
          "700": "#E14747"
        },
        "Gray": {
          "500": "#595959",
          "700": "#999999",
          "900": "#D9D9D9",
          "Black": "#000000",
          "White": "#FFFFFF"
        },
        "Success": {
          "300": "#199033",
          "500": "#32A94C",
          "700": "#4CC366"
        },
        "foreground": "#000000",
        "background": "#FFFFFF"
      },
      "spacing": {
        "FiveUnits": "80px",
        "FourUnits": "64px",
        "OneAndHalfUnits": "24px",
        "TwoUnits": "32px",
        "HalfUnit": "8px",
        "ThreeUnits": "48px",
        "Unit": "16px",
        "SixUnits": "96px"
      },
      "borderRadius": {
        "Radius4": "4px",
        "Radius2": "2px",
        "Radius8": "8px",
        "Round": "50%"
      },
      "scale": {
        "Small": "48px",
        "MaxWidth": "1400px",
        "XXLarge": "288px",
        "Medium": "96px",
        "XLarge": "192px",
        "XSmall": "16px",
        "Large": "144px"
      }
    }
  },
  "plugins": [],
  "content": [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./*.html"
  ]
}