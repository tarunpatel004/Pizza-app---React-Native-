//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, FlatList, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import RouteNames from '../navigation/route_names'
import { connect } from 'react-redux';
import { selectPizzaSize } from '../actions/pizza'
import CommonStyle from "../common/commonStyle"

class PizzaSize extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    style={{
                        flexGrow: 0
                    }}
                    horizontal={true}
                    data={this.props.pizzaSizeList}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        this._renderListItem(item)
                    )}
                />

                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate(RouteNames.crust)
                    }}
                    style={CommonStyle.buttonStyle}>
                    <Text
                        style={CommonStyle.buttonTextStyle}>Next</Text>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }
    _renderListItem(item) {
        return (
            <TouchableOpacity
                onPress={() => {
                    this.props.selectPizzaSize(item)
                }}
                style={
                    item.selected ?
                        CommonStyle.selectedButtonStyle : CommonStyle.normalButtonStyle}>
                <Image
                    source={item.image}
                />
                <Text style={[CommonStyle.textStyleBlack, { marginTop: 10 }]}>{item.size}</Text>
                <Text style={CommonStyle.textStyleBlack}>${item.price}</Text>

            </TouchableOpacity>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },


});

const mapStateToProps = (state) => {
    return {
        pizzaSizeList: state.pizza.pizzaSizeList,
        selectedPizzaSize: state.pizza.selectedPizzaSize,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectPizzaSize: (pizza) => dispatch(selectPizzaSize(pizza))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PizzaSize);