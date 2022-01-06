from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import table

db = SQLAlchemy()

class User(db.Model):
    __tablename__='users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(120), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(500), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
 
    def __repr__(self):
        return '<User %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "username":self.username,
            "email": self.email,
            # do not serialize the password, its a security breach
        }    


class Movies(db.Model):
    __tablename__='movies'
    imdb_id = db.Column(db.String(120), primary_key=True)
    original_language = db.Column(db.String(120), nullable=False)
    original_title = db.Column(db.String(120), unique=True, nullable=False)
    release_date = db.Column(db.String(120), nullable=False)
    title = db.Column(db.String(120), unique=True, nullable=False)
    vote_average = db.Column(db.Integer)
    vote_count = db.Column(db.Integer)

    def serialize(self):
        return{
            "imdb_id":self.imdb_id
            "original_language":self.original_language
            "original_title":self.original_title
            "release_date":self.release_date
            "title":self.title
            "vote_average":self.vote_average
            "vote_count":self.vote_count
        }






class Favorites(db.Model):
    user_id = db.Column(db.Integer,db.ForeignKey("users.id"), primary_key=True)
    movie_id = db.Column(db.String(120),db.ForeignKey('movies.imdb_id'),primary_key=True)

    def serialize(self):
        return{
            "user_id":self.user_id
            "movie_id":self.movie_id
        }
    



