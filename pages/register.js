const { I } = inject();

module.exports = {
  registerHeaderText: 'Register Account',
  firstNameField: {css: '#input-firstname'},

  verifyRegisterAccountText(){
    I.see(this.registerHeaderText);
  },

  fillFirstName(name){
    I.fillField({css: '#input-firstname'}, name);
  }
}
