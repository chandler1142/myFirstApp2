/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

var ReactNative = require('react-native')
var React = require('react')
var Icon = require('react-native-vector-icons/Ionicons')
var AppRegistry = ReactNative.AppRegistry
var StyleSheet = ReactNative.StyleSheet
var Text = ReactNative.Text
var View = ReactNative.View
var TabBarIOS = ReactNative.TabBarIOS

var myFirstApp = React.createClass({

    getInitialState() {
        console.log("child", "getInitialState")
        return {
            selectedTab: 'blueTab'
        }
    },

    _renderContent: function (color: string, pageText: string, num?: number) {
        return (
            <View style={[styles.tabContent, {backgroundColor: color}]}>
                <Text style={styles.tabText}>{pageText}</Text>
                <Text style={styles.tabText}>{num} re-renders of the {pageText}</Text>
            </View>
        );
    },

    render: function () {


        return (
            <TabBarIOS tintColor="#ee735c">
                <Icon.TabBarItem
                    iconName='ios-videocam-outline'
                    selectedIconName='ios-videocam'
                    selected={this.state.selectedTab === 'blueTab'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'blueTab',
                        })
                    }}>
                    {this._renderContent('#414A8C', 'Blue Tab')}
                </Icon.TabBarItem>
                <Icon.TabBarItem
                    iconName='ios-recording-outline'
                    selectedIconName='ios-recording'
                    badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
                    selected={this.state.selectedTab === 'redTab'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'redTab',
                        })
                    }}>
                    {this._renderContent('#783E33', 'Red Tab', this.state.notifCount)}
                </Icon.TabBarItem>
                <Icon.TabBarItem
                    iconName='ios-more-outline'
                    selectedIconName='ios-more'
                    selected={this.state.selectedTab === 'greenTab'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'greenTab',
                        })
                    }}>
                    {this._renderContent('#21551C', 'Green Tab', this.state.presses)}
                </Icon.TabBarItem>
            </TabBarIOS>
        );
    },
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
