/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

var Son = React.createClass({

    getDefaultProps() {
        console.log("child","getDefaultProps")
    },

    getInitialState() {
        console.log("child","getInitialState")
        return {
            times: this.props.times
        }
    },

    timesPlus() {
        let times = this.state.times
        times++
        this.setState({
            times: times
        })
    },

    componentWillMount() {
        console.log("child","componentWillMount")
    },

    componentDidMount() {
        console.log("child","componentDidMount")
    },

    componentWillReceiveProps(props) {
        console.log(this.props.times + "    " + props.times)
        console.log("child","componentWillReceiveProps")
        this.setState({
            times: props.times
        })
    },

    shouldComponentUpdate() {
        console.log("child","shouldComponentUpdate")
        return true
    },

    componentWillUpdate() {
        console.log("child","componentWillUpdate")

    },

    componentDidUpdate() {
        console.log("child","componentDidUpdate")

    },

    timesReset() {
        this.props.timesReset();
    },

    render() {
        console.log("child","render")
        return (
            <View style={styles.container}>
                <Text style={styles.welcome} onPress={this.timesPlus}>
                    儿子： 有本事揍我啊
                </Text>
                <Text style={styles.instructions}>
                    你居然揍我: {this.state.times}次
                </Text>
                <Text style={styles.instructions} onPress={this.timesReset}>
                    信不信我亲亲你
                </Text>
            </View>
        )
    }
})


var myFirstApp = React.createClass({
    getDefaultProps() {
        console.log("father", "getDefaultProps")
    },

    getInitialState() {
        console.log("father", "getInitialState")
        return {
            times: 2,
            hit: false
        }
    },

    timesReset() {
        this.setState({
            times: 0
        })
    },

    willHit() {
        this.setState({
            hit: true
        })
    },

    timesPlus() {
        var times = this.state.times
        times += 3
        this.setState({
            times: times
        })
    },

    componentWillMount() {
        console.log("father", "componentWillMount")
    },

    componentDidMount() {
        console.log("father", "componentDidMount")
    },

    shouldComponentUpdate() {
        console.log("father", "shouldComponentUpdate")
        return true
    },

    componentWillUpdate() {
        console.log("father", "componentWillUpdate")

    },

    componentDidUpdate() {
        console.log("father", "componentDidUpdate")

    },

    render() {
        console.log("render")
        return (
            <View style={styles.container}>
                {
                    this.state.hit
                        ? <Son times={this.state.times} timesReset={this.timesReset} />
                        : null
                }

                <Text style={styles.welcome} onPress={this.timesReset}>
                    父亲说，心情好就放你一马
                </Text>
                <Text style={styles.instructions} onPress={this.willHit}>
                    到底揍不揍
                </Text>
                <Text style={styles.instructions}>
                    揍了{this.state.times}次而已
                </Text>
                <Text style={styles.instructions} onPress={this.timesPlus}>
                    不听话，再揍你3次
                </Text>
            </View>
        );
    }
})


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('myFirstApp', () => myFirstApp);
