// отправка заказа
const postOfferToMail = (dataOffer) => {
    
  return fetch(`http://51.250.110.232/offer`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: dataOffer.name,
      phone: dataOffer.phone,
      data: dataOffer.data,
      person: dataOffer.person,
    }),
  }).then((res) => {
    if (res.ok) {
        alert("Спасибо, заявка отправлена")
      return res.json();
    }
    // если ошибка, отклоняем промис
    return Promise.reject(`Ошибка: ${res.status}`);
  });
};

// отправка контактов
const postContactToMail = (dataContact) => {
    
    return fetch(`http://51.250.110.232/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: dataContact.name,
        phone: dataContact.phone,
        email: dataContact.email,
        person: dataContact.person,
        comment: dataContact.comment,
      }),
    }).then((res) => {
      if (res.ok) {
          alert("Спасибо, заявка отправлена")
        return res.json();
      }
      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  };

export { postOfferToMail, postContactToMail };
