# Github Butler 🥄

<a href="https://www.buymeacoffee.com/pQaOPBV8D" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>

> A github/git automation tool

A automation tool for creating GitHub & Git projects that lets you get up and running with actually coding in notime instead of spending time on creating a repo, cloning the repo, opening in VSCode etc.

![gh-butler demo video](https://res.cloudinary.com/albin-groen/image/upload/v1567237228/gh-butler-demo.gif "gh-butler demo video")

## How it works

1.  **Run the wizard**

        gh-butler     

1.5. **Enter Github repo level access token**

The first time you run the command it will ask you for your Github Repo level access token. Fetch it from Github in the developer settings and enter it after the question. This will only be stored in a local file and you'll not have to enter it again as long as you don't delete the file.

2.  **Answer questions**

    - _Name_:
    - _Description_:
    - _Public or Private_:
    - _Use template_:

3.  **Start coding**

## Installation

1.  **Clone repository**

        git clone git@github.com:albingroen/gh-butler.git

2.  **Install dependencies**

        npm install

        # or use yarn

        yarn

3.  **Add a global alias to `~/.zshrc`** (_or similar for bash_)

        alias gh-butler="node PATH_TO_FOLDER/script.js"

4.  **Source your zsh configuration** (_or similar for bash_)

        source ~/.zshrc

## Templates

- React.js
- Node.js
- Node.js + Express
- Link to any template you wish to use

## Contributors

[Albin Groen](https://github.com/albingroen)
