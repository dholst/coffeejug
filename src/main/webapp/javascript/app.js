(function() {
  var CreditCard, CreditCardFactory, Discover, MasterCard, Visa,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  CreditCard = (function() {

    function CreditCard(type) {
      this.type = type != null ? type : "unknown";
    }

    return CreditCard;

  })();

  Visa = (function(_super) {

    __extends(Visa, _super);

    function Visa() {
      Visa.__super__.constructor.call(this, "visa");
    }

    return Visa;

  })(CreditCard);

  MasterCard = (function(_super) {

    __extends(MasterCard, _super);

    function MasterCard() {
      MasterCard.__super__.constructor.call(this, "mastercard");
    }

    return MasterCard;

  })(CreditCard);

  Discover = (function(_super) {

    __extends(Discover, _super);

    function Discover() {
      Discover.__super__.constructor.call(this, "discover");
    }

    return Discover;

  })(CreditCard);

  CreditCardFactory = (function() {

    function CreditCardFactory() {}

    CreditCardFactory.create = function(number) {
      switch (number[0]) {
        case "4":
          return new Visa();
        case "5":
          return new MasterCard();
        case "6":
          return new Discover();
        default:
          return new CreditCard();
      }
    };

    return CreditCardFactory;

  })();

  $(function() {
    return $("#card").on("keyup", function() {
      var $input, creditCard;
      $input = $(this);
      creditCard = CreditCardFactory.create($input.val());
      $input.siblings(".cc").removeClass("on");
      return $input.siblings(".cc." + creditCard.type).addClass("on");
    });
  });

}).call(this);
