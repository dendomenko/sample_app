import React from 'react';
import {mount, shallow} from 'enzyme';
import {expect} from 'chai';
import SignInForm from '../js/components/SignIn';

// import md5 from 'md5';

describe('', () => {

    it('contains an  component', function () {
        const wrapper = mount();
        expect(wrapper.find(SignInForm))
            .to
            .have
            .length(1);
    });

});