import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('legislator-quick-view', 'Integration | Component | legislator quick view', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{legislator-quick-view}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#legislator-quick-view}}
      template block text
    {{/legislator-quick-view}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
