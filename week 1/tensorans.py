import tensorflow as tf
import numpy as np

data_placeholder_x = tf.placeholder(tf.int32, name = "data_placeholder_x")
data_placeholder_y = tf.placeholder(tf.int32, name = "data_placeholder_y")
const1 = tf.constant([2], name =	"const1")
const2 = tf.constant([13], name =	"const2")
const3 = tf.constant([1], name =	"const3")
fourthpow = tf.constant([4], name =	"fourthpow")
f = tf.multiply(const1,tf.pow(data_placeholder_x, fourthpow)) + tf.multiply(const2,data_placeholder_y) + const3


with tf.Session() as sess:  
    datax = [5]
    datay = [6]  
    print(sess.run(f, feed_dict={data_placeholder_x: datax, data_placeholder_y: datay}))




#output:-
#2020-03-05 04:13:59.763563: I tensorflow/core/platform/cpu_feature_guard.cc:142] Your CPU supports instructions that this TensorFlow binary was not compiled to use: AVX2

#[1329]