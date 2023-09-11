import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MovieDetailScreen = ({ route }) => {
  const { movie } = route.params;
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}` }}
        style={{ width: 200, height: 300, marginBottom: 10 }}
      />
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>{movie.title}</Text>
      <Text style={{ fontSize: 16, marginBottom: 10 }}>Release Date: {movie.release_date}</Text>
      <Text style={{ fontSize: 16, marginBottom: 10 }}>Genre: {movie.genre}</Text>
      <Text style={{ fontSize: 16, marginBottom: 10 }}>Overview: {movie.overview}</Text>
      <Text style={{ fontSize: 16, marginBottom: 10 }}>User Rating: {movie.vote_average}</Text>

      <TouchableOpacity
        onPress={() => {
          // Implement the Play Now functionality here
          // For example, you can show an in-app notification
          alert('Movie is Playing');
        }}
        style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5 }}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Play Now</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          // Navigate back to the Movies screen when the user clicks a button (e.g., "Go Back")
          navigation.goBack();
        }}
        style={{ backgroundColor: 'gray', padding: 10, borderRadius: 5, marginTop: 20 }}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MovieDetailScreen;
