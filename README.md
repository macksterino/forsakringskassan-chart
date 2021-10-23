# @macksterino/forsakringskassan-chart
A simple website showcasing a chart on amount of people given planned care abroad/overseas.
All data is provided by Försäkringskassan and their public API, this only shows that but as a chart.

## Usage
`$ git clone https://github.com/macksterino/forsakringskassan-chart.git && cd forsakringskassan-chart`

You can also view the webpage through github-pages but currently it does not work as intended. Or simply download the ZIP package.

Thereafter:

`$ npm install`

And finally do:

`$ npm start` to run the development build.

or

`$ npm run build && serve -s build` to run the production build.

If you encounter any issues such as being unable to fetch all the data, do the following:

Go to https://cors-anywhere.herokuapp.com/ and *Request temporary access*. This is due to using a proxy to avoid CORS problems.
