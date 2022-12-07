import { css } from "./utils";

const template = () => `
    <div class="tooltip-title">${data.title}</div>
    <ul class="tooltip-list">
        ${data.items
          .map((item) => {
            return `
            <li class="tooltip-list-item">
               <div class="value" style="color: ${item.color}">${item.value}</div>
               <div class="name" style="color: ${item.color}">${item.name}</div>
            </li>
          `;
          })
          .join("\n")}
    </ul>
`;

export function tooltip(el) {
  return {
    show() {},
    hide() {
      css(el, { display: "none" });
    },
  };
}
