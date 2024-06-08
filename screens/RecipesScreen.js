import React, { useEffect, useState } from 'react';
import { View, FlatList, Button, Text } from 'react-native';
import RecipeCardItem from "../components/RecipeCardItem";
import { useNavigation } from '@react-navigation/native';
import axios from "axios";
import NetInfo from "@react-native-community/netinfo";

const RecipesScreen = () => {
    const navigation = useNavigation();
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState(null);
    const [isConnected, setIsConnected] = useState(true);

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
            setIsConnected(state.isConnected);
            if (state.isConnected) {
                fetchRecipes();
            } else {
                setError('No network connection. Please check your internet settings.');
            }
        });

        return () => unsubscribe();
    }, []);

    const fetchRecipes = async () => {
        const timer = setTimeout(() => {
            setError('Error fetching recipes. Please try again later.'); // Set error state
        }, 5000);
        try {
            const response = await axios.get('http://192.168.1.31:8081/recipe');
            setRecipes(response.data);
            setError(null); // Clear any previous errors
            clearTimeout(timer);
        } catch (error) {
            clearTimeout(timer);
            if (error.response) {
                // The request was made and the server responded with a status code outside the range of 2xx
                console.error('Backend error:', error.response.data);
                setError('Server error. Please try again later.');
            } else if (error.request) {
                // The request was made but no response was received
                console.error('No response from backend:', error.request);
                setError('No response from server. Please try again later.');
            } else {
                // Something happened in setting up the request that triggered an error
                console.error('Error setting up request:', error.message);
                setError('Error fetching recipes. Please try again later.');
            }
        }
    };

    const selectRecipeHandler = (item) => {
        navigation.navigate('RecipeDetailScreen', {
            recipeItem: item,
        });
    };

    const handleRefresh = () => {
        setError(null);
        if (isConnected) {
            fetchRecipes();
        } else {
            setError('No network connection. Please check your internet settings.');
        }
    };

    const renderRecipeItem = ({ item }) => (
        <RecipeCardItem item={item} onSelect={selectRecipeHandler} />
    );

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <Button title="Refresh" onPress={handleRefresh} />
            {error && <Text style={{ color: 'red' }}>{error}</Text>}
            <FlatList
                data={recipes}
                renderItem={renderRecipeItem}
                keyExtractor={(item) => (item.id ? item.id.toString() : Math.random().toString())} // Fallback if id is undefined
            />
        </View>
    );
};

export default RecipesScreen;
