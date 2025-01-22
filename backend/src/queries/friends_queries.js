
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


async function send_friend_request(senderId, recipientId) {
    try {
      const friendRequest = await prisma.userFriends.create({
        data: {
          userId: senderId,
          friendId: recipientId,
        },
      });
  
      console.log('Friend request sent:', friendRequest);
      return friendRequest;
    } catch (error) {
      console.error('Error sending friend request:', error);
    }
  }


  async function get_pending_friend_requests(userId) {
    try {
      const pendingRequests = await prisma.userFriends.findMany({
        where: {
          friendId: userId, // User is the recipient
          status: 'PENDING', // Only pending requests
        },
        include: {
          user: true, // Include sender details
        },
      });
  
      console.log('Pending Friend Requests:', pendingRequests);
      return pendingRequests;
    } catch (error) {
      console.error('Error fetching pending requests:', error);
    }
  }


  async function get_friends(userId) {
    try {
      const friends = await prisma.userFriends.findMany({
        where: {
          OR: [
            { userId, status: 'ACCEPTED' }, // User initiated the friendship
            { friendId: userId, status: 'ACCEPTED' }, // User is the recipient
          ],
        },
        include: {
          user: true,   // Include details of the other user
          friend: true, // Include details of the friend
        },
      });
  
      console.log('Friends:', friends);
      return friends;
    } catch (error) {
      console.error('Error fetching friends:', error);
    }
  }



  async function accept_friend_request(senderId, recipientId) {
    try {
      const updatedRequest = await prisma.userFriends.update({
        where: {
            userId_friendId: {
              userId: recipientId,
              friendId: senderId,
            },
          },
        data: {
          status: 'ACCEPTED',   
        },
      });
  
      console.log('Friend request accepted:', updatedRequest);
      return updatedRequest;
    } catch (error) {
      console.error('Error accepting friend request:', error);
    }
  }

  async function get_requests(userId)
  {

    const requests = await prisma.userFriends.findMany({
      where: {
        userId: userId
      },  include: {
        user: true,   // Include details of the other user
        friend: true, // Include details of the friend
      },
    })
return requests;
  }


  module.exports ={ send_friend_request, get_pending_friend_requests, get_friends, accept_friend_request,get_requests}