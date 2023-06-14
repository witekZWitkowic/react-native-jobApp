import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { checkImageURL } from '../../../../utils'
import styles from './popularjobcard.style'

const PopularJobCard = ({item, selectedJob, handleCardPress}) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image 
          source={{uri: checkImageURL(item.employer_logo)
          ? item.employer_logo
          : 'https://img.freepik.com/darmowe-wektory/gradientowy-szablon-logo-nerd_23-2149201756.jpg'
          }}
          resizeMode='contain'
          style={styles.logoImage}
        />

      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>{item.employer_name ? item.employer_name : "The best employer"}</Text>
      <View>
        <Text style={styles.jobName(selectedJob, item)}  numberOfLines={1}>
          {item.job_title ? item.job_title : "React Developer"}
        </Text>
        <Text style={styles.location}>
          {item.job_country ? item.job_country : "PL"}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default PopularJobCard