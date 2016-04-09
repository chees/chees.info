Run locally:

    goapp serve

Deploy:

    goapp deploy


Letsencrypt:

    brew install letsencrypt
    sudo letsencrypt -a manual certonly

Update the code in `static/letsencrypt.txt` and `app.yaml` and run `goapp deploy`.
After that you can finish the letsencrypt process and upload the new cert.

Get the public key certificate:

    sudo cat /etc/letsencrypt/live/chees.info/fullchain.pem

Get the private key:

    sudo openssl rsa -inform pem -in /etc/letsencrypt/live/chees.info/privkey.pem -outform pem | cat
