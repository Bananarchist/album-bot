let
  myNixPkgs = import <nixpkgs> {};
in
myNixPkgs.mkShell {
  allowUnfree = true;
  nativeBuildInputs = with myNixPkgs; [
    which
    htop
    zlib
    python3
    nodejs
    github-copilot-cli
    vimPlugins.copilot-vim
  ];
}
