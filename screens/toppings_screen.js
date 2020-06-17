//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import RouteNames from '../navigation/route_names'
import { selectPizzaToppings } from '../actions/pizza'
import { connect } from 'react-redux';
import CommonStyle from "../common/commonStyle"

// create a component
class ChooseTopping extends Component {
    constructor(props) {
        super(props);


    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View
                    style={{ flexDirection: 'row', width: '95%'}}>
                    <View style={{flex: 1}}>
                        <Text style={CommonStyle.textStyleBlack}>Selected Pizza Size</Text>
                        <View
                            style={
                                [CommonStyle.normalButtonStyle, { flexDirection: 'row', alignItems: 'center' }]}>
                            <Image
                                style={{ height: 50, width: 50, }}
                                resizeMode={'center'}
                                source={this.props.selectedPizzaSize.image}
                            />

                            <View style={{ flexDirection: 'column' ,marginLeft: 10 }}>
                                <Text style={[CommonStyle.textStyleBlack]}>{this.props.selectedPizzaSize.size}</Text>
                                <Text style={CommonStyle.textStyleBlack}>${this.props.selectedPizzaSize.price}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{flex: 1}}>
                        <Text style={CommonStyle.textStyleBlack}>Selected Pizza Crust</Text>
                        <View
                            style={
                                [CommonStyle.normalButtonStyle, { flexDirection: 'row', alignItems: 'center' }]}>
                            <Image
                                style={{ height: 50, width: 50, }}
                                resizeMode={'center'}
                                source={this.props.selectedPizzaCrust.image}
                            />

                            <View style={{ flexDirection: 'column',  marginLeft: 10  }}>
                                <Text style={[CommonStyle.textStyleBlack]}>{this.props.selectedPizzaCrust.type}</Text>
                                <Text style={CommonStyle.textStyleBlack}>${this.props.selectedPizzaCrust.price}</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <Text style={[CommonStyle.textStyleBlack, {
                    fontSize: 13, margin: 12,
                }]}>3 Toppings are free then it will be $.5 per toppings, maximum you can select upto {this.props.selectedPizzaSize.maxIngredients}</Text>

                <FlatList
                    style={{ flex: 1, width: '95%' }}
                    data={this.props.pizzaToppingsList}
                    renderItem={({ item }) => this._renderListItem({ item: item })}
                    keyExtractor={item => item.id}

                />

                <TouchableOpacity
                    onPress={() => {

                        if(this.props.selectedPizzaSize.maxIngredients < this.props.selectedPizzaToppings.length){
                            alert("For the "+this.props.selectedPizzaSize.size+" size of pizza you can select upto "+this.props.selectedPizzaSize.maxIngredients+" ingredients only.")
                            return
                        }
                        this.props.navigation.navigate(RouteNames.checkPizza)
                    }}
                    style={CommonStyle.buttonStyle}>
                    <Text
                        style={CommonStyle.buttonTextStyle}>Next</Text>
                </TouchableOpacity>

            </SafeAreaView>


        );
    }


    _renderListItem({ item }) {
        return (
            <TouchableOpacity onPress={() => {
                this.props.selectPizzaToppings(item);

            }} style={!item.selected ? CommonStyle.normalButtonStyle : CommonStyle.selectedButtonStyle}>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                    <Image style={{ height: 40, width: 40 }}
                        source={item.image}
                    />

                    <Text style={[CommonStyle.textStyleBlack, { marginLeft: 10 }]}>{item.name}</Text>
                </View>

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
        pizzaToppingsList: state.pizza.pizzaToppingsList,
        selectedPizzaToppings: state.pizza.selectedPizzaToppings,
        selectedPizzaSize: state.pizza.selectedPizzaSize,
        selectedPizzaCrust: state.pizza.selectedPizzaCrust,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectPizzaToppings: (pizza) => dispatch(selectPizzaToppings(pizza))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChooseTopping);