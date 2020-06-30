//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, FlatList, SafeAreaView, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import RouteNames from '../navigation/route_names'
import { connect } from 'react-redux';
import { selectPizzaSize } from '../actions/pizza'
import CommonStyle from "../common/commonStyle"
import { fetchEmployee } from '../actions/employee'

class PizzaSize extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchEmployee()
        this.checkAPIError()
    }

    checkAPIError() {
        console.log("Error ", this.props.employeeListError)
        if (this.props.employeeListError != null) {
            alert(this.props.employeeListError)
        }
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                {this.props.isLoading && <ActivityIndicator size="large" color='black'></ActivityIndicator>}
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

                <FlatList
                    style={{
                        flexGrow: 0
                    }}
                    horizontal={true}
                    data={this.props.employeeList}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        this._renderEmployeeListItem(item)
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
    _renderEmployeeListItem(item) {
        return (
            <View style={CommonStyle.selectedButtonStyle}>

                <Text style={CommonStyle.textStyleBlack}>{item.employee_name}</Text>

            </View>
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
        isLoading: state.employee.isLoading,
        employeeList: state.employee.employeeList,
        employeeListError: state.employee.employeeListError,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectPizzaSize: (pizza) => dispatch(selectPizzaSize(pizza)),
        fetchEmployee: () => dispatch(fetchEmployee())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PizzaSize);