// #include <ros/ros.h>
// #include <std_msgs/String.h>

// int main (int argc, char **argv){{
//     ros::init(argc, argv, "robot_news_radio_transmitter", ros::init_options::AnonymousName);
//     // ros::init(argc, argv, "robot_news_radio_transmitter");
//     ros::NodeHandle nh;
//     ros::Publisher pub = nh.advertise<std_msgs::String>("/robot_news_radio", 10);
//     ros::Rate rate(3);
//     while (ros::ok()){
//         std_msgs::String msg;
//         msg.data = "Hi, this is CPP news radio";
//         pub.publish(msg);
//         rate.sleep();
//     }
// }}

#include <ros/ros.h>
#include <std_msgs/String.h>

void callback_receive_radio_data(const std_msgs::String& msg){
    ROS_INFO("Message received: %s", msg.data.c_str());
}

int main (int argc, char **argv){
    ros::init(argc,argv, "smartphone", ros::init_options::AnonymousName);
    // ros::init(argc,argv, "smartphone");
    ros::NodeHandle nh;
    ros::Subscriber sub = nh.Subscriber("/robot_news_radio", 1000, callback_receive_radio_data);
    ros::spin()
}