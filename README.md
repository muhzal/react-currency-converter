## Quick start
1.  Make sure that you have docker installed.
2.  Clone this repo using `git clone --depth=1 https://github.com/muhzal/react-currency-converter.git`
3.  Move to the appropriate directory: `cd react-currency-converter`.
4.  Build docker image using `docker build -t currency:app ./`
5.  Once done, run the Docker image using: `docker run -it -p 3000:3000 -v $(pwd)/:/app/ currency:app`
6.  Verify by navigating to your server address in your preferred browser `127.0.0.1:3000`

## Credits
Many thanks to:
- [Facebook: create-react-app](https://github.com/facebook/create-react-app)
- [Foreign exchange rates API](https://exchangeratesapi.io/)
- [Bootstrap](https://getbootstrap.com/) & [Reactstrap](https://github.com/reactstrap/reactstrap)