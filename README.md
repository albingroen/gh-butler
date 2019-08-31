# Github Butler

<a href="https://www.buymeacoffee.com/albingroen" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>

> A github/git automation tool

A automation tool for creating GitHub & Git projects that lets you get up and running with actually coding in notime instead of spending time on creating a repo, cloning the repo, opening in VSCode etc.

![gh-butler demo video](https://res.cloudinary.com/albin-groen/image/upload/v1567237228/gh-butler-demo.gif "gh-butler demo video")

## How it works

1.  **Run the wizard**

    gh-butler

2.  **Answer questions**

    - _Name_:
    - _Description_:
    - _Public or Private_:
    - _Use template_:

3.  **Start coding**

## Installation

1.  **Clone repository**

        git clone git@github.com:albingroen/create-repo.git

2.  **Install dependencies**

        npm install

        # or use yarn

        yarn

3.  **Add your Github Access Token**

    ⚠️ Choose **Repo** level for your access token

    [Get your token here](https://github.com/settings/tokens/new)

    Change `config.ex.js` to `config.js` and add your access token

4.  **Add a global alias to `~/.zshrc`**

        alias gh-butler="node ~/gh-butler/script.js"

5.  **Source your zsh configuration**

        source ~/.zshrc

## Contributors

[Albin Groen](https://github.com/albingroen)
