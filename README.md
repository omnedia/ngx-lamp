# ngx-lamp

<a href="https://ngxui.com" target="_blank" style="display: flex;gap: .5rem;align-items: center;cursor: pointer; padding: 0 0 0 0; height: fit-content;">
  <img src="https://ngxui.com/assets/img/ngxui-logo.png" style="width: 64px;height: 64px;">
  <p style="font-weight: bold; padding: 0; margin: 0; font-size: 4rem">NGXUI</p>
</a>

This Library is part of the NGXUI ecosystem. <br>
View all available components at https://ngxui.com

`@omnedia/ngx-lamp` is an Angular library that provides a customizable lamp effect component. The component allows for flexible configuration of the lamp's color and background color, enabling you to create various glowing effects that can enhance the visual appeal of your Angular application.

## Features

- Customizable lamp color and background color.
- Lightweight and easy to integrate as a standalone component.
- Allows for full control over styles through custom CSS.

## Installation

Install the library using npm:

```bash
npm install @omnedia/ngx-lamp
```

## Usage

Import the `NgxLampComponent` in your Angular module or component:

```typescript
import {NgxLampComponent} from '@omnedia/ngx-lamp';

@Component({
  ...
    imports:
[
  ...
    NgxLampComponent,
],
...
})
```

Use the component in your template:

```html

<om-lamp [lampColor]="'#ffcc00'" [backgroundColor]="'#1e1e1e'" styleClass="custom-lamp"></om-lamp>
```

## How It Works

- Lamp and Background Color: The lampColor input controls the glowing color of the lamp, while the backgroundColor input allows you to set the background of the lamp effect. This provides flexibility to match the component to your application's theme.
- Global and Custom Styling: The .om-lamp container can be styled globally or with a custom styleClass. You can easily modify the appearance of the lamp using CSS variables.

## API

```html

<om-lamp
  [lampColor]="lampColor"
  [backgroundColor]="backgroundColor"
  styleClass="your-custom-class"
></om-lamp>
```

- `lampColor` (optional): The color of the lamp's glow. Accepts any valid CSS color value (e.g., '#ffcc00', '#00ffcc').
- `backgroundColor` (optional): The background color behind the lamp. Accepts any valid CSS color value (e.g., '#1e1e1e', '#000000').
- `styleClass` (optional): A custom CSS class to apply to the .om-lamp container for additional styling.

## Example

```html

<om-lamp [lampColor]="'#ff6347'" [backgroundColor]="'#000000'" styleClass="lamp-container">
</om-lamp>
```

This will create a lamp effect with a tomato-colored glow and a black background.

## Styling

`.om-lamp`

- The main container for the lamp effect. You can apply global or custom styles using the styleClass input. The component uses CSS variables for easy control over the lamp's appearance.
- Make sure to give the `om-lamp` component a width and height of 100% to fit your wrapper size.

### Custom Lamp Styling Example

In this example, the lamp and its background are styled with custom colors via css instead of API values:

```html

<div class="lamp-wrapper">
  <om-lamp styleClass="custom-lamp"></om-lamp>
</div>
```

```css
.lamp-wrapper {
  width: 70%;
  height: 700px;
}

om-lamp {
  width: 100%;
  height: 100%;
}

.custom-lamp {
  --om-lamp-color: #ffcc00 !important;
  --om-lamp-background-color: #1e1e1e !important;
}
```

This will apply a yellowish glow and a dark background to the lamp.

## Contributing

Contributions are welcome. Please submit a pull request or open an issue to discuss your ideas.

## License

This project is licensed under the MIT License.
