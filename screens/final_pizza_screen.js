//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import CommonStyle from "../common/commonStyle"
import color from '../common/color'
import RouteNames from '../navigation/route_names'
import { reset } from '../actions/pizza'

// create a component
class CheckYourPizza extends Component {
    render() {
        return (
            <View style={styles.container}>

                <View
                    style={{ flexDirection: 'row', width: '95%' }}>
                    <View style={{ flex: 1 }}>
                        <Text style={CommonStyle.textStyleBlack}>Selected Pizza Size</Text>
                        <View
                            style={
                                [CommonStyle.normalButtonStyle, { flexDirection: 'row', alignItems: 'center' }]}>
                            <Image
                                style={{ height: 50, width: 50, }}
                                resizeMode={'center'}
                                source={this.props.selectedPizzaSize.image}
                            />

                            <View style={{ flexDirection: 'column', marginLeft: 10 }}>
                                <Text style={[CommonStyle.textStyleBlack]}>{this.props.selectedPizzaSize.size}</Text>
                                <Text style={CommonStyle.textStyleBlack}>${this.props.selectedPizzaSize.price}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={CommonStyle.textStyleBlack}>Selected Pizza Crust</Text>
                        <View
                            style={
                                [CommonStyle.normalButtonStyle, { flexDirection: 'row', alignItems: 'center' }]}>
                            <Image
                                style={{ height: 50, width: 50, }}
                                resizeMode={'center'}
                                source={this.props.selectedPizzaCrust.image}
                            />

                            <View style={{ flexDirection: 'column', marginLeft: 10 }}>
                                <Text style={[CommonStyle.textStyleBlack]}>{this.props.selectedPizzaCrust.type}</Text>
                                <Text style={CommonStyle.textStyleBlack}>${this.props.selectedPizzaCrust.price}</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <Text style={[CommonStyle.textStyleBlack, { marginTop: 20 }]}>Selected Toppings</Text>

                <FlatList
                    style={{ flex: 1, width: '95%' }}
                    data={this.props.selectedPizzaToppings}
                    renderItem={({ item }) => this._renderListItem({ item: item })}
                    keyExtractor={item => item.id}

                />

                <View
                    style={
                        [CommonStyle.selectedButtonStyle, { flexDirection: 'row', height: 40, alignItems: 'center' }]}>
                    <Text style={[CommonStyle.textStyleBlack, { flex: 1 }]}>Total</Text>
                    <View style={styles.lineStyle}></View>
                    <Text style={[CommonStyle.textStyleBlack, , { flex: 1 }]}>${this._getFinalTotal()}</Text>
                </View>

                <TouchableOpacity
                    onPress={() => {
                        this.props.reset()
                        this.props.navigation.navigate(RouteNames.pizzasize)
                    }}
                    style={[CommonStyle.buttonStyle, { marginTop: 10 }]}>
                    <Text
                        style={CommonStyle.buttonTextStyle}>DONE</Text>
                </TouchableOpacity>

            </View>
        );
    }

    _getFinalTotal() {
        var Total = 0;

        console.log("==", this.props.selectedPizzaSize.price)

        Total = this.props.selectedPizzaSize.price + this.props.selectedPizzaCrust.price;
        if (this.props.selectedPizzaToppings.length > 3) {
            Total = Total + ((this.props.selectedPizzaToppings.length - 3) * 0.5);
        }
        return Total;
    }
    _renderListItem({ item }) {
        console.log("Item", JSON.stringify(item))
        return (
            <View style={CommonStyle.normalButtonStyle}>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                    <Image style={{ height: 40, width: 40 }}
                        source={item.image}
                    />

                    <Text style={[CommonStyle.textStyleBlack, { marginLeft: 10 }]}>{item.name}</Text>
                </View>

            </View>
        );
    }

}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    lineStyle: { height: 20, width: 1, backgroundColor: color.Black }
});



const mapStateToProps = (state) => {
    return {
        selectedPizzaToppings: state.pizza.selectedPizzaToppings,
        selectedPizzaSize: state.pizza.selectedPizzaSize,
        selectedPizzaCrust: state.pizza.selectedPizzaCrust,
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        reset: () => dispatch(reset())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckYourPizza);