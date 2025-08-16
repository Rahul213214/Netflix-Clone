import MediaListItem from "@/src/components/MediaListItem";
import { Feather } from "@expo/vector-icons";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import mediaList from '../../../assets/data/mediaList.json';
export default function Index() {
  return (
    <SafeAreaView>
      <View style={styles.headerContainer}>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>For Lukas</Text>
          <Feather name="search" size={22} color="white"></Feather>
          
        </View>

        <View style={styles.filterContainer}>
          <Text style={styles.filterText}>TV show</Text>
          <Text style={styles.filterText}>Movies</Text>
          <Text style={styles.filterText}>Categories</Text>
        </View>
      </View>
      <FlatList
        data={mediaList}
        renderItem={({item: verticalListItem}) => (
          <View>
            <Text style={styles.sectionTitle}>{verticalListItem.title}</Text>
            <FlatList 
              horizontal={true}
              data={verticalListItem.data}
              renderItem={({item: horizontalListItem}) => <MediaListItem mediaItem={horizontalListItem}/>}
              
              ></FlatList>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  sectionTitle:{
    fontSize:17,
    color:'white',
    fontWeight:'700',
    paddingVertical:10
  },
  headerTitle:{
    color:'white',
    fontSize:20,
    fontWeight:'bold',
  },
  headerTitleContainer:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  filterText:{
    color:'white',
    fontSize:12,
    borderWidth:1,
    borderRadius:15,
    borderColor:'lightgrey',
    fontWeight:'bold',
    paddingVertical:5,
    paddingHorizontal:10
  },
  filterContainer:{
    flexDirection:'row',
    gap:5
  },
  headerContainer:{
    marginHorizontal:10,
    gap:10,
    paddingTop:40
  }

})