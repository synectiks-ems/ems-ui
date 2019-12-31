export class BadgeRenderer {
  constructor(private panel) {}

  createHtml() {
    const totalBadges = this.panel.totalBadges;
    let retHtml = '';
    for (let i = 0; i < totalBadges; i++) {
      retHtml +=
        '<div class="badge-conainer">' +
        '<div class="head">' +
        '<h2><i class="fa fa-calendar"></i> Operating Systems</h2>' +
        '</div>' +
        '<div class="content">' +
        '<ul>' +
        '<li><p>Total Classes:</p> <span>50</span></li>' +
        '<li><p>Balance:</p> <span>10</span></li>' +
        '</ul>' +
        '<ul>' +
        '<li><p>Next Class:</p> <span>30/01/2019</span></li>' +
        '<li><p>CS 1st Year:</p> <span>10.00 am</span></li>' +
        '</ul>' +
        '</div>' +
        '</div>';
    }
    return retHtml;
  }
}
