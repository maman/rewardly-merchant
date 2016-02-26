export let memberLists = {
  members: [
    {
      id: '23',
      real_name: 'Budi Termaman',
      type: 'free',
      latest_transactions: [
        {
          id: '23432',
          date: '2012-12-22 +0700',
          member: {
            id: '23',
            name: 'Budi Termaman'
          },
          merchant: {
            id: '2',
            name: 'Ayam Bakar Raung'
          },
          cash: null,
          gift: {
            id: '1',
            name: 'Boneka',
            description: 'Boneka Canti',
            image: 'http://placehold.it/24x24',
            point: '20'
          }
        },
        {
          id: '23432',
          date: '2012-12-22 +0700',
          member: {
            id: '23',
            name: 'Budi Termaman'
          },
          merchant: {
            id: '2',
            name: 'Ayam Bakar Raung'
          },
          cash: {
            description: 'Ayam Bakar goreng 2',
            amount: '50000'
          },
          gift: null
        }
      ]
    },
    {
      id: '23',
      real_name: 'Budi Termaman',
      type: 'free',
      latest_transactions: [
        {
          id: '23432',
          date: '2012-12-22 +0700',
          member: {
            id: '23',
            name: 'Budi Termaman'
          },
          merchant: {
            id: '2',
            name: 'Ayam Bakar Raung'
          },
          cash: null,
          gift: {
            id: '1',
            name: 'Boneka',
            description: 'Boneka Canti',
            image: 'http://placehold.it/24x24',
            point: '20'
          }
        },
        {
          id: '23432',
          date: '2012-12-22 +0700',
          member: {
            id: '23',
            name: 'Budi Termaman'
          },
          merchant: {
            id: '2',
            name: 'Ayam Bakar Raung'
          },
          cash: {
            description: 'Ayam Bakar goreng 2',
            amount: '50000'
          },
          gift: null
        }
      ]
    }
  ]
}

export let transactionLists = {
  transactions: [
    {
      transaction_id: '243234',
      member_name: 'Test 234',
      datetime: '2019-12-2012 +0700',
      type: 'Gift',
      amount: '20'
    },
    {
      transaction_id: '243237',
      member_name: 'Test 235',
      datetime: '2019-12-2012 +0700',
      type: 'Pay',
      amount: '50000'
    }
  ]
}
