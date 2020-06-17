import React, { Component } from 'react';
import { View, FlatList, StyleSheet, Image, TouchableOpacity, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { selectPizzaCrust } from '../actions/pizza'
import CommonStyle from "../common/commonStyle"

import RouteNames from '../navigation/route_names'

class ChooseCrust extends Component {

    constructor(props) {
        super(props);

    }
    render() {
        return (
            <View style={styles.container}>
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

                <FlatList
                    style={{
                        flexGrow: 0
                    }}
                    horizontal={true}
                    data={this.props.pizzaCrustList}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        this._renderListItem(item)
                    )}
                />

                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate(RouteNames.toppings)
                    }}
                    style={CommonStyle.buttonStyle}>
                    <Text
                        style={CommonStyle.buttonTextStyle}>Next</Text>
                </TouchableOpacity>

            </View>
        );
    }


    _renderListItem(item) {
        return (
            <TouchableOpacity
                onPress={() => {
                    this.props.selectPizzaBase(item)
                }}
                style={
                    item.selected ?
                        CommonStyle.selectedButtonStyle : CommonStyle.normalButtonStyle}>
                <Image
                    style={{ height: 120, width: 150, }}
                    resizeMode={'center'}
                    source={item.image}
                />
                <Text style={[CommonStyle.textStyleBlack, { marginTop: 10 }]}>{item.type}</Text>
                <Text style={CommonStyle.textStyleBlack}>${item.price}</Text>

            </TouchableOpacity>




        );
    }

}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },


});


const mapStateToProps = (state) => {
    return {
        pizzaCrustList: state.pizza.pizzaCrustList,
        selectedPizzaCrust: state.pizza.selectedPizzaCrust,
        selectedPizzaSize: state.pizza.selectedPizzaSize,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectPizzaBase: (pizza) => dispatch(selectPizzaCrust(pizza))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChooseCrust);