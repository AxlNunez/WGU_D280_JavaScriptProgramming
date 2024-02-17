# WGU Class D280 - JavaScript Programming: Interactive World Map with Country Information

This project leverages Angular to create an interactive world map that displays detailed information about each country. By integrating with the WorldBank API, the application provides a visual and interactive way to explore country-specific data.

## Features

- **Interactive SVG World Map:** Utilizes an SVG map of the world as the primary interface for interaction.
- **Country Information Display:** Fetches and displays information about countries, including the country name, capital, region, income level, and two additional properties of your choice (I used Longitude and Latitude for this project).
- **Angular Routing:** Assigns the map component to the default URL using Angular's routing module.
- **Two-Column HTML Layout:** Features a layout with one column dedicated to the map and another to display country information fetched from the API.
- **Interactive Angular Component:** Converts the SVG map into an interactive component, recognizing and responding to mouse events on each country's path.
- **API Service:** Includes an Angular service that makes HTTP calls to retrieve country information using Angular's `HttpClient`.

- **Interact with the World Map:** Hover over a country on the SVG world map to select it.
- **View Country Information:** Upon selection, detailed information about the country will be displayed in the right column of the layout in the table.

## Technical Details

- **SVG World Map:** The map used in this project can be found [here](https://innovsandbox.space/map.html). It's not made clear where to find it during the assignment instructions, you have to look in the Course Search to find it
- **API Integration:** This project uses the [WorldBank API](https://datahelpdesk.worldbank.org/knowledgebase/articles/898581-api-basic-call-structures) to fetch country information.
- **Angular Routing:** The map component is assigned to the default URL (`/`) using Angular's `RouterModule`.
- **API Service Methods:**
- `getCountryInfo(countryId: string)`: Accepts a country name and fetches detailed information from the selected API.
- A local variable within the component captures and displays the fetched information in the HTML layout's right column.

## Dependencies

- Angular
- RxJS
- Angular `HttpClientModule` for API requests

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
