Package.describe({
    summary: "Standard Mylar packages",
    name: "mylar:platform",
    version: "0.1.0",
    git: "https://github.com/gliesesoftware/mylar.git"
});

Package.onUse(function (api) {
    api.imply([
        // principal graph
        'mylar:principal@0.1.3',
        // login service for IDP accounts
        'mylar:accounts-idp@0.1.1',
        // meteor changes
        'mylar:meteor-changes@0.1.1'
    ]);
});