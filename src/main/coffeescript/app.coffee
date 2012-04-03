class CreditCard
  constructor: (@type = "unknown") ->

class Visa extends CreditCard
  constructor: -> super "visa"

class MasterCard extends CreditCard
  constructor: -> super "mastercard"

class Discover extends CreditCard
  constructor: -> super "discover"

class CreditCardFactory
  @create = (number) ->
    switch number[0]
      when "4" then new Visa()
      when "5" then new MasterCard()
      when "6" then new Discover()
      else new CreditCard()

$ ->
  $("#card").on "keyup", ->
    $input = $(@)
    creditCard = CreditCardFactory.create($input.val())
    $input.siblings(".cc").removeClass("on")
    $input.siblings(".cc.#{creditCard.type}").addClass("on")
