import { Pressable, Text, StyleSheet} from "react-native";
import React from "react";


const RecipeCardItem = ({ item, onSelect }) => {
    return(
        <Pressable  style={({ pressed }) => [styles.item, pressed && styles.pressed]}
                               onPress={onSelect.bind(this, item)}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.name}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        borderRadius: 6,
        marginVertical: 12,
        //backgroundColor: Colors.primary500,
        backgroundColor: '#1aacf0',
        elevation: 2,
        shadowColor: 'black',
        shadowOpacity: 0.15,
        shadowOffset: { width: 1, height: 1 },
        shadowRadius: 2,
    },
    pressed: {
        opacity: 0.9,
    }
})

export default RecipeCardItem;