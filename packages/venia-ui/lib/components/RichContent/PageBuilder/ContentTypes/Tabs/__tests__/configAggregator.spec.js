import configAggregator from '../configAggregator';

test('tabs config aggregator retrieves default values from empty tabs content type', () => {
    const node = document.createElement('div');
    node.innerHTML = `<div class="tab-align-right" data-content-type="tabs" data-appearance="default" data-active-tab="1" data-element="main" style="margin: 0px; padding: 0px;"><ul role="tablist" class="tabs-navigation" data-element="navigation" style="text-align: left;"><li role="tab" class="tab-header" data-element="headers" style="border-radius: 0px; border-width: 1px;"><a href="#H62A09U" class="tab-title"><span class="tab-title">Our first tab</span></a></li><li role="tab" class="tab-header" data-element="headers" style="border-radius: 0px; border-width: 1px;"><a href="#I8UNF8S" class="tab-title"><span class="tab-title">Our first tab copy</span></a></li><li role="tab" class="tab-header" data-element="headers" style="border-radius: 0px; border-width: 1px;"><a href="#EOLAH5W" class="tab-title"><span class="tab-title">Vertical Align Center</span></a></li></ul><div class="tabs-content" data-element="content" style="border-width: 1px; border-radius: 0px; min-height: 300px;"><div data-content-type="tab-item" data-appearance="default" data-tab-name="Our first tab" data-background-images="{}" data-element="main" id="H62A09U" style="justify-content: flex-start; display: flex; flex-direction: column; background-position: left top; background-size: cover; background-repeat: no-repeat; background-attachment: scroll; border-width: 1px; border-radius: 0px; margin: 0px; padding: 40px;"><div class="pagebuilder-column-group" style="display: flex;" data-content-type="column-group" data-grid-size="12" data-element="main"><div class="pagebuilder-column" data-content-type="column" data-appearance="full-height" data-background-images="{}" data-element="main" style="justify-content: flex-start; display: flex; flex-direction: column; background-position: left top; background-size: cover; background-repeat: no-repeat; background-attachment: scroll; border-style: none; border-width: 1px; border-radius: 0px; width: 50%; margin: 0px; padding: 10px; align-self: stretch;"><h2 data-content-type="heading" data-appearance="default" data-element="main" style="border-style: none; border-width: 1px; border-radius: 0px;">Our left content</h2><div data-content-type="text" data-appearance="default" data-element="main" style="border-style: none; border-width: 1px; border-radius: 0px; margin: 0px; padding: 0px;"><p>Some other great content right here! :)&nbsp;</p></div></div><div class="pagebuilder-column" data-content-type="column" data-appearance="full-height" data-background-images="{}" data-element="main" style="justify-content: flex-start; display: flex; flex-direction: column; background-position: left top; background-size: cover; background-repeat: no-repeat; background-attachment: scroll; border-style: none; border-width: 1px; border-radius: 0px; width: 50%; margin: 0px; padding: 10px; align-self: stretch;"><figure data-content-type="image" data-appearance="full-width" data-element="main" style="margin: 0px; padding: 0px; border-style: none;"><img class="pagebuilder-mobile-hidden" src="https://pagebuilder.test/media/wysiwyg/enhanced-storefront.jpg" alt="" title="" data-element="desktop_image" style="border-style: none; border-width: 1px; border-radius: 0px; max-width: 100%; height: auto;"><img class="pagebuilder-mobile-only" src="https://pagebuilder.test/media/wysiwyg/enhanced-storefront.jpg" alt="" title="" data-element="mobile_image" style="border-style: none; border-width: 1px; border-radius: 0px; max-width: 100%; height: auto;"></figure></div></div></div><div data-content-type="tab-item" data-appearance="default" data-tab-name="Our first tab copy" data-background-images="{}" data-element="main" id="I8UNF8S" style="justify-content: flex-start; display: flex; flex-direction: column; background-position: left top; background-size: cover; background-repeat: no-repeat; background-attachment: scroll; border-width: 1px; border-radius: 0px; margin: 0px; padding: 40px;"><div class="pagebuilder-column-group" style="display: flex;" data-content-type="column-group" data-grid-size="12" data-element="main"><div class="pagebuilder-column" data-content-type="column" data-appearance="full-height" data-background-images="{}" data-element="main" style="justify-content: flex-start; display: flex; flex-direction: column; background-position: left top; background-size: cover; background-repeat: no-repeat; background-attachment: scroll; border-style: none; border-width: 1px; border-radius: 0px; width: 50%; margin: 0px; padding: 10px; align-self: stretch;"><h2 data-content-type="heading" data-appearance="default" data-element="main" style="border-style: none; border-width: 1px; border-radius: 0px;">Our left content</h2><div data-content-type="text" data-appearance="default" data-element="main" style="border-style: none; border-width: 1px; border-radius: 0px; margin: 0px; padding: 0px;"><p>Some other great content right here! :)&nbsp;</p></div><div data-content-type="buttons" data-appearance="inline" data-same-width="false" data-element="main" style="border-style: none; border-width: 1px; border-radius: 0px; margin: 0px; padding: 10px 10px 0px;"><div data-content-type="button-item" data-appearance="default" data-element="main" style="display: inline-block;"><div class="pagebuilder-button-primary" data-element="empty_link" style="text-align: center;"><span data-element="link_text">First button</span></div></div></div></div><div class="pagebuilder-column" data-content-type="column" data-appearance="full-height" data-background-images="{}" data-element="main" style="justify-content: flex-start; display: flex; flex-direction: column; background-position: left top; background-size: cover; background-repeat: no-repeat; background-attachment: scroll; border-style: none; border-width: 1px; border-radius: 0px; width: 50%; margin: 0px; padding: 10px; align-self: stretch;"></div></div></div><div data-content-type="tab-item" data-appearance="default" data-tab-name="Vertical Align Center" data-background-images="{}" data-element="main" id="EOLAH5W" style="justify-content: center; display: flex; flex-direction: column; background-position: left top; background-size: cover; background-repeat: no-repeat; background-attachment: scroll; border-width: 1px; border-radius: 0px; min-height: 500px; margin: 0px; padding: 40px;"><div class="pagebuilder-column-group" style="display: flex;" data-content-type="column-group" data-grid-size="12" data-element="main"><div class="pagebuilder-column" data-content-type="column" data-appearance="full-height" data-background-images="{}" data-element="main" style="justify-content: flex-start; display: flex; flex-direction: column; background-position: left top; background-size: cover; background-repeat: no-repeat; background-attachment: scroll; border-style: none; border-width: 1px; border-radius: 0px; width: 50%; margin: 0px; padding: 10px; align-self: stretch;"><h2 data-content-type="heading" data-appearance="default" data-element="main" style="border-style: none; border-width: 1px; border-radius: 0px;">Our left content</h2><div data-content-type="text" data-appearance="default" data-element="main" style="border-style: none; border-width: 1px; border-radius: 0px; margin: 0px; padding: 0px;"><p>Some other great content right here! :)&nbsp;</p></div><div data-content-type="buttons" data-appearance="inline" data-same-width="false" data-element="main" style="border-style: none; border-width: 1px; border-radius: 0px; margin: 0px; padding: 10px 10px 0px;"><div data-content-type="button-item" data-appearance="default" data-element="main" style="display: inline-block;"><div class="pagebuilder-button-primary" data-element="empty_link" style="text-align: center;"><span data-element="link_text">First button</span></div></div></div></div><div class="pagebuilder-column" data-content-type="column" data-appearance="full-height" data-background-images="{}" data-element="main" style="justify-content: flex-start; display: flex; flex-direction: column; background-position: left top; background-size: cover; background-repeat: no-repeat; background-attachment: scroll; border-style: none; border-width: 1px; border-radius: 0px; width: 50%; margin: 0px; padding: 10px; align-self: stretch;"></div></div></div></div></div>`;
    expect(
        configAggregator(node.childNodes[0], {
            appearance: 'default'
        })
    ).toEqual(
        expect.objectContaining({
            defaultIndex: 1,
            tabNavigationAlignment: 'right',
            headers: ['Our first tab', 'Our first tab copy', 'Vertical Align Center'],
            minHeight: '300px'
        })
    );
});

test('tabs config aggregator retrieve no active tab', () => {
    const node = document.createElement('div');
    node.innerHTML = `<div class="tab-align-right" data-content-type="tabs" data-appearance="default" data-active-tab="" data-element="main" style="margin: 0px; padding: 0px;"><ul role="tablist" class="tabs-navigation" data-element="navigation" style="text-align: left;"><li role="tab" class="tab-header" data-element="headers" style="border-radius: 0px; border-width: 1px;"><a href="#H62A09U" class="tab-title"><span class="tab-title">Our first tab</span></a></li><li role="tab" class="tab-header" data-element="headers" style="border-radius: 0px; border-width: 1px;"><a href="#I8UNF8S" class="tab-title"><span class="tab-title">Our first tab copy</span></a></li><li role="tab" class="tab-header" data-element="headers" style="border-radius: 0px; border-width: 1px;"><a href="#EOLAH5W" class="tab-title"><span class="tab-title">Vertical Align Center</span></a></li></ul><div class="tabs-content" data-element="content" style="border-width: 1px; border-radius: 0px; min-height: 300px;"><div data-content-type="tab-item" data-appearance="default" data-tab-name="Our first tab" data-background-images="{}" data-element="main" id="H62A09U" style="justify-content: flex-start; display: flex; flex-direction: column; background-position: left top; background-size: cover; background-repeat: no-repeat; background-attachment: scroll; border-width: 1px; border-radius: 0px; margin: 0px; padding: 40px;"><div class="pagebuilder-column-group" style="display: flex;" data-content-type="column-group" data-grid-size="12" data-element="main"><div class="pagebuilder-column" data-content-type="column" data-appearance="full-height" data-background-images="{}" data-element="main" style="justify-content: flex-start; display: flex; flex-direction: column; background-position: left top; background-size: cover; background-repeat: no-repeat; background-attachment: scroll; border-style: none; border-width: 1px; border-radius: 0px; width: 50%; margin: 0px; padding: 10px; align-self: stretch;"><h2 data-content-type="heading" data-appearance="default" data-element="main" style="border-style: none; border-width: 1px; border-radius: 0px;">Our left content</h2><div data-content-type="text" data-appearance="default" data-element="main" style="border-style: none; border-width: 1px; border-radius: 0px; margin: 0px; padding: 0px;"><p>Some other great content right here! :)&nbsp;</p></div></div><div class="pagebuilder-column" data-content-type="column" data-appearance="full-height" data-background-images="{}" data-element="main" style="justify-content: flex-start; display: flex; flex-direction: column; background-position: left top; background-size: cover; background-repeat: no-repeat; background-attachment: scroll; border-style: none; border-width: 1px; border-radius: 0px; width: 50%; margin: 0px; padding: 10px; align-self: stretch;"><figure data-content-type="image" data-appearance="full-width" data-element="main" style="margin: 0px; padding: 0px; border-style: none;"><img class="pagebuilder-mobile-hidden" src="https://pagebuilder.test/media/wysiwyg/enhanced-storefront.jpg" alt="" title="" data-element="desktop_image" style="border-style: none; border-width: 1px; border-radius: 0px; max-width: 100%; height: auto;"><img class="pagebuilder-mobile-only" src="https://pagebuilder.test/media/wysiwyg/enhanced-storefront.jpg" alt="" title="" data-element="mobile_image" style="border-style: none; border-width: 1px; border-radius: 0px; max-width: 100%; height: auto;"></figure></div></div></div><div data-content-type="tab-item" data-appearance="default" data-tab-name="Our first tab copy" data-background-images="{}" data-element="main" id="I8UNF8S" style="justify-content: flex-start; display: flex; flex-direction: column; background-position: left top; background-size: cover; background-repeat: no-repeat; background-attachment: scroll; border-width: 1px; border-radius: 0px; margin: 0px; padding: 40px;"><div class="pagebuilder-column-group" style="display: flex;" data-content-type="column-group" data-grid-size="12" data-element="main"><div class="pagebuilder-column" data-content-type="column" data-appearance="full-height" data-background-images="{}" data-element="main" style="justify-content: flex-start; display: flex; flex-direction: column; background-position: left top; background-size: cover; background-repeat: no-repeat; background-attachment: scroll; border-style: none; border-width: 1px; border-radius: 0px; width: 50%; margin: 0px; padding: 10px; align-self: stretch;"><h2 data-content-type="heading" data-appearance="default" data-element="main" style="border-style: none; border-width: 1px; border-radius: 0px;">Our left content</h2><div data-content-type="text" data-appearance="default" data-element="main" style="border-style: none; border-width: 1px; border-radius: 0px; margin: 0px; padding: 0px;"><p>Some other great content right here! :)&nbsp;</p></div><div data-content-type="buttons" data-appearance="inline" data-same-width="false" data-element="main" style="border-style: none; border-width: 1px; border-radius: 0px; margin: 0px; padding: 10px 10px 0px;"><div data-content-type="button-item" data-appearance="default" data-element="main" style="display: inline-block;"><div class="pagebuilder-button-primary" data-element="empty_link" style="text-align: center;"><span data-element="link_text">First button</span></div></div></div></div><div class="pagebuilder-column" data-content-type="column" data-appearance="full-height" data-background-images="{}" data-element="main" style="justify-content: flex-start; display: flex; flex-direction: column; background-position: left top; background-size: cover; background-repeat: no-repeat; background-attachment: scroll; border-style: none; border-width: 1px; border-radius: 0px; width: 50%; margin: 0px; padding: 10px; align-self: stretch;"></div></div></div><div data-content-type="tab-item" data-appearance="default" data-tab-name="Vertical Align Center" data-background-images="{}" data-element="main" id="EOLAH5W" style="justify-content: center; display: flex; flex-direction: column; background-position: left top; background-size: cover; background-repeat: no-repeat; background-attachment: scroll; border-width: 1px; border-radius: 0px; min-height: 500px; margin: 0px; padding: 40px;"><div class="pagebuilder-column-group" style="display: flex;" data-content-type="column-group" data-grid-size="12" data-element="main"><div class="pagebuilder-column" data-content-type="column" data-appearance="full-height" data-background-images="{}" data-element="main" style="justify-content: flex-start; display: flex; flex-direction: column; background-position: left top; background-size: cover; background-repeat: no-repeat; background-attachment: scroll; border-style: none; border-width: 1px; border-radius: 0px; width: 50%; margin: 0px; padding: 10px; align-self: stretch;"><h2 data-content-type="heading" data-appearance="default" data-element="main" style="border-style: none; border-width: 1px; border-radius: 0px;">Our left content</h2><div data-content-type="text" data-appearance="default" data-element="main" style="border-style: none; border-width: 1px; border-radius: 0px; margin: 0px; padding: 0px;"><p>Some other great content right here! :)&nbsp;</p></div><div data-content-type="buttons" data-appearance="inline" data-same-width="false" data-element="main" style="border-style: none; border-width: 1px; border-radius: 0px; margin: 0px; padding: 10px 10px 0px;"><div data-content-type="button-item" data-appearance="default" data-element="main" style="display: inline-block;"><div class="pagebuilder-button-primary" data-element="empty_link" style="text-align: center;"><span data-element="link_text">First button</span></div></div></div></div><div class="pagebuilder-column" data-content-type="column" data-appearance="full-height" data-background-images="{}" data-element="main" style="justify-content: flex-start; display: flex; flex-direction: column; background-position: left top; background-size: cover; background-repeat: no-repeat; background-attachment: scroll; border-style: none; border-width: 1px; border-radius: 0px; width: 50%; margin: 0px; padding: 10px; align-self: stretch;"></div></div></div></div></div>`;
    expect(
        configAggregator(node.childNodes[0], {
            appearance: 'default'
        })
    ).toEqual(
        expect.objectContaining({
            defaultIndex: 0,
        })
    );
});

test('tabs config aggregator invalid navigation alignment', () => {
    const node = document.createElement('div');
    node.innerHTML = `<div class="no-align-class" data-content-type="tabs" data-appearance="default" data-active-tab="" data-element="main" style="margin: 0px; padding: 0px;"><ul role="tablist" class="tabs-navigation" data-element="navigation" style="text-align: left;"><li role="tab" class="tab-header" data-element="headers" style="border-radius: 0px; border-width: 1px;"><a href="#H62A09U" class="tab-title"><span class="tab-title">Our first tab</span></a></li><li role="tab" class="tab-header" data-element="headers" style="border-radius: 0px; border-width: 1px;"><a href="#I8UNF8S" class="tab-title"><span class="tab-title">Our first tab copy</span></a></li><li role="tab" class="tab-header" data-element="headers" style="border-radius: 0px; border-width: 1px;"><a href="#EOLAH5W" class="tab-title"><span class="tab-title">Vertical Align Center</span></a></li></ul><div class="tabs-content" data-element="content" style="border-width: 1px; border-radius: 0px; min-height: 300px;"><div data-content-type="tab-item" data-appearance="default" data-tab-name="Our first tab" data-background-images="{}" data-element="main" id="H62A09U" style="justify-content: flex-start; display: flex; flex-direction: column; background-position: left top; background-size: cover; background-repeat: no-repeat; background-attachment: scroll; border-width: 1px; border-radius: 0px; margin: 0px; padding: 40px;"><div class="pagebuilder-column-group" style="display: flex;" data-content-type="column-group" data-grid-size="12" data-element="main"><div class="pagebuilder-column" data-content-type="column" data-appearance="full-height" data-background-images="{}" data-element="main" style="justify-content: flex-start; display: flex; flex-direction: column; background-position: left top; background-size: cover; background-repeat: no-repeat; background-attachment: scroll; border-style: none; border-width: 1px; border-radius: 0px; width: 50%; margin: 0px; padding: 10px; align-self: stretch;"><h2 data-content-type="heading" data-appearance="default" data-element="main" style="border-style: none; border-width: 1px; border-radius: 0px;">Our left content</h2><div data-content-type="text" data-appearance="default" data-element="main" style="border-style: none; border-width: 1px; border-radius: 0px; margin: 0px; padding: 0px;"><p>Some other great content right here! :)&nbsp;</p></div></div><div class="pagebuilder-column" data-content-type="column" data-appearance="full-height" data-background-images="{}" data-element="main" style="justify-content: flex-start; display: flex; flex-direction: column; background-position: left top; background-size: cover; background-repeat: no-repeat; background-attachment: scroll; border-style: none; border-width: 1px; border-radius: 0px; width: 50%; margin: 0px; padding: 10px; align-self: stretch;"><figure data-content-type="image" data-appearance="full-width" data-element="main" style="margin: 0px; padding: 0px; border-style: none;"><img class="pagebuilder-mobile-hidden" src="https://pagebuilder.test/media/wysiwyg/enhanced-storefront.jpg" alt="" title="" data-element="desktop_image" style="border-style: none; border-width: 1px; border-radius: 0px; max-width: 100%; height: auto;"><img class="pagebuilder-mobile-only" src="https://pagebuilder.test/media/wysiwyg/enhanced-storefront.jpg" alt="" title="" data-element="mobile_image" style="border-style: none; border-width: 1px; border-radius: 0px; max-width: 100%; height: auto;"></figure></div></div></div><div data-content-type="tab-item" data-appearance="default" data-tab-name="Our first tab copy" data-background-images="{}" data-element="main" id="I8UNF8S" style="justify-content: flex-start; display: flex; flex-direction: column; background-position: left top; background-size: cover; background-repeat: no-repeat; background-attachment: scroll; border-width: 1px; border-radius: 0px; margin: 0px; padding: 40px;"><div class="pagebuilder-column-group" style="display: flex;" data-content-type="column-group" data-grid-size="12" data-element="main"><div class="pagebuilder-column" data-content-type="column" data-appearance="full-height" data-background-images="{}" data-element="main" style="justify-content: flex-start; display: flex; flex-direction: column; background-position: left top; background-size: cover; background-repeat: no-repeat; background-attachment: scroll; border-style: none; border-width: 1px; border-radius: 0px; width: 50%; margin: 0px; padding: 10px; align-self: stretch;"><h2 data-content-type="heading" data-appearance="default" data-element="main" style="border-style: none; border-width: 1px; border-radius: 0px;">Our left content</h2><div data-content-type="text" data-appearance="default" data-element="main" style="border-style: none; border-width: 1px; border-radius: 0px; margin: 0px; padding: 0px;"><p>Some other great content right here! :)&nbsp;</p></div><div data-content-type="buttons" data-appearance="inline" data-same-width="false" data-element="main" style="border-style: none; border-width: 1px; border-radius: 0px; margin: 0px; padding: 10px 10px 0px;"><div data-content-type="button-item" data-appearance="default" data-element="main" style="display: inline-block;"><div class="pagebuilder-button-primary" data-element="empty_link" style="text-align: center;"><span data-element="link_text">First button</span></div></div></div></div><div class="pagebuilder-column" data-content-type="column" data-appearance="full-height" data-background-images="{}" data-element="main" style="justify-content: flex-start; display: flex; flex-direction: column; background-position: left top; background-size: cover; background-repeat: no-repeat; background-attachment: scroll; border-style: none; border-width: 1px; border-radius: 0px; width: 50%; margin: 0px; padding: 10px; align-self: stretch;"></div></div></div><div data-content-type="tab-item" data-appearance="default" data-tab-name="Vertical Align Center" data-background-images="{}" data-element="main" id="EOLAH5W" style="justify-content: center; display: flex; flex-direction: column; background-position: left top; background-size: cover; background-repeat: no-repeat; background-attachment: scroll; border-width: 1px; border-radius: 0px; min-height: 500px; margin: 0px; padding: 40px;"><div class="pagebuilder-column-group" style="display: flex;" data-content-type="column-group" data-grid-size="12" data-element="main"><div class="pagebuilder-column" data-content-type="column" data-appearance="full-height" data-background-images="{}" data-element="main" style="justify-content: flex-start; display: flex; flex-direction: column; background-position: left top; background-size: cover; background-repeat: no-repeat; background-attachment: scroll; border-style: none; border-width: 1px; border-radius: 0px; width: 50%; margin: 0px; padding: 10px; align-self: stretch;"><h2 data-content-type="heading" data-appearance="default" data-element="main" style="border-style: none; border-width: 1px; border-radius: 0px;">Our left content</h2><div data-content-type="text" data-appearance="default" data-element="main" style="border-style: none; border-width: 1px; border-radius: 0px; margin: 0px; padding: 0px;"><p>Some other great content right here! :)&nbsp;</p></div><div data-content-type="buttons" data-appearance="inline" data-same-width="false" data-element="main" style="border-style: none; border-width: 1px; border-radius: 0px; margin: 0px; padding: 10px 10px 0px;"><div data-content-type="button-item" data-appearance="default" data-element="main" style="display: inline-block;"><div class="pagebuilder-button-primary" data-element="empty_link" style="text-align: center;"><span data-element="link_text">First button</span></div></div></div></div><div class="pagebuilder-column" data-content-type="column" data-appearance="full-height" data-background-images="{}" data-element="main" style="justify-content: flex-start; display: flex; flex-direction: column; background-position: left top; background-size: cover; background-repeat: no-repeat; background-attachment: scroll; border-style: none; border-width: 1px; border-radius: 0px; width: 50%; margin: 0px; padding: 10px; align-self: stretch;"></div></div></div></div></div>`;
    expect(
        configAggregator(node.childNodes[0], {
            appearance: 'default'
        })
    ).toEqual(
        expect.objectContaining({
            tabNavigationAlignment: 'left',
        })
    );
});
