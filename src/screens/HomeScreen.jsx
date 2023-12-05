import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  Platform,
  Modal,
} from 'react-native';
import {useState} from 'react';

const HomeScreen = ({setView}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleHomePress = () => {
    console.log('Home box pressed!');
    setView('house');
  };

  const handleAutoPress = () => {
    console.log('Auto box pressed!');
    setView('car');
  };

  const handleUpcomingPress = () => {
    console.log('Upcoming box pressed!');
    setView('life');
  };

  const handleMenuToggle = () => {
    setMenuOpen(prevState => !prevState);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.redBanner}></View>
        <View style={styles.header}>
          <View style={styles.iconContainer}>
            <Text style={styles.iconText}>👤</Text>
          </View>
          <TouchableOpacity
            style={styles.menuButton}
            onPress={handleMenuToggle}>
            <Text style={styles.menuText}>☰</Text>
          </TouchableOpacity>
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={menuOpen}
          onRequestClose={() => {
            setMenuOpen(false);
          }}>
          <TouchableOpacity
            style={styles.modalOverlay}
            onPress={() => setMenuOpen(false)}>
            <View
              style={styles.modalView}
              onStartShouldSetResponder={() => true} // This prevents the outer TouchableOpacity from being triggered
            >
              <TouchableOpacity onPress={() => console.log('Option 1 pressed')}>
                <Text style={styles.menuOption}>Settings</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => console.log('Option 2 pressed')}>
                <Text style={styles.menuOption}>Privacy Policy</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => console.log('Logged out')}>
                <Text style={styles.menuOption}>Log Out</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </Modal>

        <TouchableOpacity onPress={handleHomePress} style={styles.touchableBox}>
          <ImageBackground
            source={require('../../assets/images/home.png')}
            style={styles.box}
            imageStyle={styles.imageBackground}>
            <Text style={styles.homeText}>HOME</Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleAutoPress} style={styles.touchableBox}>
          <ImageBackground
            source={require('../../assets/images/auto.png')}
            style={styles.box}
            imageStyle={styles.imageBackground}>
            <Text style={styles.autoText}>AUTO</Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleUpcomingPress}
          style={styles.touchableBox}>
          <ImageBackground
            source={require('../../assets/images/home.png')}
            style={styles.box}
            imageStyle={styles.imageBackground}>
            <Text style={styles.upcomingText}>LIFE</Text>
          </ImageBackground>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F7FA',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  iconContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E8E8E8',
    borderRadius: 20,
  },
  iconText: {
    fontSize: 18,
  },
  greetingText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  modalView: {
    width: '80%',
    margin: 30,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  menuOption: {
    marginBottom: 15,
    textAlign: 'center',
  },
  touchableBox: {
    borderRadius: 15,
    overflow: 'hidden',
    marginVertical: 10,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.15,
        shadowRadius: 6,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
  },
  imageBackground: {
    borderRadius: 15,
  },
  homeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {width: 0, height: 1},
    textShadowRadius: 2,
  },
  autoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {width: 0, height: 1},
    textShadowRadius: 2,
  },
  upcomingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {width: 0, height: 1},
    textShadowRadius: 2,
  },
  menuOption: {
    marginBottom: 15,
    textAlign: 'center',
  },
  menuButton: {
    padding: 10,
  },
  menuText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
  },
  menuOption: {
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#E0E0E0',
  },

  modalOverlay: {
    flex: 1,
    justifyContent: 'center', // This will vertically center the modal content
    alignItems: 'center', // This will horizontally center the modal content
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // This gives a dim background
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'gray', // Set your own custom Color
    marginBottom: 20,
    padding: 10, // Add some padding
    borderRadius: 0, // Optional: for rounded corners
  },

  iconText: {
    fontSize: 18,
    color: 'white', // Change the color to white
  },
  greetingText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white', // Change the color to white
  },
  menuText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white', // Change the color to white
  },

  modalView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default HomeScreen;
