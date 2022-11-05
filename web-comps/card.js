const template = document.createElement('template');

template.innerHTML = `
  <style>
    * { 
      margin: 0; 
      z-index: 1; 
      position: relative; 
      line-height: 1; 
    }

    .card {
      position: relative;
      padding: 1rem;
    }
    
    svg.card-icon {
      height: 30px;
      width: 30px;
      margin-bottom: 0.5rem;
    }

    h2.card-title {
      margin-bottom: 0.5rem;
    }

    p.card-description {
      line-height: 1.4;
    }

    .card-box {
      height: 100px;
      width: 100px;
      background: var(--primary-light);
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
      border-radius: var(--radius);
    }
  </style>

  <div class="card">
    <svg class="card-icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-cash" viewBox="0 0 16 16">
      <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
      <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2H3z"/>
    </svg>
    <h2 class="card-title">Card Title</h2>
    <p class="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni hic perferendis ea id sint quae facere voluptatibus.</p>
    <div class="card-box"></div>
  </div>
`;

class Card extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {

  }
}

window.customElements.define('card-comp', Card);