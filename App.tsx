/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { fetchPopularMovies } from './api'; // Import your fetchPopularMovies function

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MovieDetailScreen from './MovieDetailScreen'; // Import MovieDetailScreen
import Icon from 'react-native-vector-icons/FontAwesome';
import IconEntypo from 'react-native-vector-icons/Entypo'; // Import Entypo icons
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
const Tab = createBottomTabNavigator();

const MoviesScreen = ({ navigation }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const popularMovies = await fetchPopularMovies();
      setMovies(popularMovies);
    }

    fetchMovies();
  }, []);

  const numColumns = 2; // Number of columns per row

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        // Navigate to the MovieDetail screen and pass movie details as params
        navigation.navigate('MovieDetail', { movie: item });
      }}
      style={styles.movieContainer}
    >
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}` }}
        style={styles.movieImage}
      />
      <Text style={styles.movieTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={movies}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      numColumns={numColumns}
      contentContainerStyle={styles.gridContainer}
    />
  );
};

const windowWidth = Dimensions.get('window').width;
const itemWidth = windowWidth / 2; // Divide the screen width by the number of columns
const FavoritesScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Favorites Screen</Text>
  </View>
);

const WatchlistScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Watchlist Screen</Text>
  </View>
);

const App =  () => {
  // const [data,setData]= useState([]);
  // const getAPIData=async()=>{
  //   const url="https://jsonplaceholder.typicode.com/posts";
  //   let result =await fetch(url);
  //   result=await result.json();
  //   //console.warn(result);
  //   setData(result);
  // }
  // useEffect(()=>{
  //   getAPIData();
  // },[])
  return (
  //   <ScrollView>
  //    { data.length ? 
  //     data.map((item)=>
      
  //       <View>
  //         <Text>ID :{item.id}</Text>
  //       </View>
  //     )
       
  //    : null}
  //   </ScrollView>
  <NavigationContainer>
  <Tab.Navigator>
    <Tab.Screen
      name="Movies"
      component={MoviesScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          //<FontAwesomeIcon icon={['fas', 'film']} size={size} color={color} />
          //<Icon name="star" size={30} color="gold" />
          <Icon name="film" size={size} color={color} /> 
        ),
      }}
    />
    <Tab.Screen
      name="Favorites"
      component={FavoritesScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="heart" size={size} color="red" />
        ),
      }}
    />
    <Tab.Screen
      name="Watchlist"
      component={WatchlistScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <IconMaterialIcons name="list" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
</NavigationContainer>
);
   
  
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  movieContainer: {
    flex: 1,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  movieImage: {
    width: 150,
    height: 220,
    borderRadius: 10,
  },
  movieTitle: {
    marginTop: 5,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default App;
