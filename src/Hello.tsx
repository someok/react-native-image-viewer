import React, {Component} from 'react';
import {Text, View} from 'react-native';

export type Props = {text: string};

export default class ExampleComponent extends Component<Props> {
    render() {
        const {text} = this.props;

        return (
            <View style={{backgroundColor: 'red'}}>
                <Text>Hello {text}</Text>
            </View>
        );
    }
}
