export class User {
  id: string;
  created_at: string;
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  birthday_date: string;
  street: string;
  postal_code: string;
  city: string;
  country: string;
  subscription_id: string;
  is_admin: boolean;

  constructor(id: string, created_at: string, email: string, password: string, first_name: string, last_name: string, birthday_date: string, street: string, postal_code: string, city: string, country: string, subscription_id: string, is_admin: boolean) {
    this.id = id;
    this.created_at = created_at;
    this.email = email;
    this.password = password;
    this.first_name = first_name;
    this.last_name = last_name;
    this.birthday_date = birthday_date;
    this.street = street;
    this.postal_code = postal_code;
    this.city = city;
    this.country = country;
    this.subscription_id = subscription_id;
    this.is_admin = is_admin;
  }

}
