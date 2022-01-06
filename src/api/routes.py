from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User,Movies,Favorites
from api.utils import generate_sitemap, APIException
from argon2 import PasswordHasher
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from sqlalchemy import table




ph = PasswordHasher()

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


@api.route('/register', methods=["POST"])
def register_user():
    data = request.get_json()
    # Check if User exists
    if User.query.filter(User.email == data['email']).count() > 0:
        return 'user-exists', 400
    # Create the User
    user = User(
        username=data['username'],
        email=data['email'],
        password=ph.hash(data['password']),
        is_active=True
    )
    db.session.add(user)
    db.session.commit()
    return '', 204

@api.route('/login', methods=['POST'])
def login_user():

    data = request.get_json(force=True)
    email = data['email']
    password = data['password']

    # Find the user in the DB by email
    user = User.query.filter(User.email == email).first()
        
    if user is None:
        return "", 404
    
    # check encrypted password vs. request password
    try:
        ph.verify(user.password, password)
    except:
        return "", 403
    
    # Send a token to the user
    access_token = create_access_token(identity=user.id)
    return jsonify({ "token": access_token })


@api.route('/userinfo', methods=['GET'])
@jwt_required()
def user_info():
    current_user_id = get_jwt_identity()
    user = User.query.filter(User.id == current_user_id).first()
    response_body={
        "message":f"hello i am {user.email}"
    }

    return jsonify(user.serialize(response_body)), 200


# favorites page end points
@api.route('/favorites/user/<int:user_id>/<int:imdb_id>', methods=['POST', 'DELETE'])
def handle_favorites(user_id,imdb_id):
    

    # Add favorites
    if request.method == 'POST':
        favorites = Favorites(user_id=user_id,imdb_id=imdb_id)
        print("!!FAVORITES: ", favorites)

        try:
            favorites = Favorites(user_id=user_id,imdb_id=imdb_id)
            db.session.add(favorites)
            db.session.commit()
        except Exception as e:
            payload = {
                'msg': "Couldn't add favorite. Try again later.",
                'error': e
            }
            return jsonify(payload), 409

        payload = {
            'msg': "Successfully added favorite",
            'user': user.serialize()
        }
        return jsonify(payload), 200


    # Delete favorites
    if request.method == 'DELETE':
        Favorites.query.filter(Favorites.user_id==user_id,Favorites.imdb_id==imdb_id).delete()
        db.session.commit()

        return "Success", 200


@api.route('/favorite/user/<user_id>', methods=['GET'])
def get_all_favorites(user_id):

    favorites=Favorites.query.filter(Favorites.user_id==user_id)

    serialized_favorites = [item.serialize() for item in favorites]
    return jsonify(serialized_favorites), 200

@api.route('/movies', methods=['POST'])
def save_movie():
    data = request.get_json(force=True)
    imdb_id = data['imdb_id']
    title = data['title']
    original_language= data['original_language']
    original_title=data['original_title']
    release_date=data['release_date']
    vote_average=data['vote_average']
    vote_count=data['vote_count']
    movie=Movies(imdb_id=imdb_id,title=title,original_language=original_language,original_title=original_title,release_date=release_date,vote_average=vote_average,vote_count=vote_count)

    db.session.add(movie)
    db.session.commit()
    
    return jsonify(movie.serialize()), 200



    
    
