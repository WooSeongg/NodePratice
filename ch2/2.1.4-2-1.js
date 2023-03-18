const relationship1 = {
  name: 'zero',
  friends: ['nero', 'hero', 'xero'],
  logFriends : () => {
    var that = this; // 
    this.friends?.forEach(friend => { //this의 freinds라는 변수가 없다  (?를 이용해 에러를 회피할 수 있다.)
      console.log(this.name, friend);
    });
  },
};
relationship1.logFriends();

const relationship2 = {
  name: 'zero',
  friends: ['nero', 'hero', 'xero'],
  logFriends : () => {
    this.friends.forEach(friend => { //this의 freinds라는 변수가 없다
      console.log(this.name, friend);
    });
  },
};
relationship2.logFriends();

//중첩된 화살표 함수를 쓸 때는 예상한 범위와 다르게 this를 가리킬 수 있다. 바인딩을 해야한다 